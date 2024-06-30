---
title: "API C# Civil3D - Projetando Polyline"
description: "Explicação do Comando Projetar Polyline a Partir do Profile View"
author: Matheus Ramos
date: 'June 30, 2024'
---

No meu trabalho, durante o ajuste de superfícies, um dos meus principais desafios é realizar esse ajuste de forma rápida e precisa. A falta de um comando que me permita desenhar diretamente no Profile View e, assim, criar uma Polyline 3D no local desejado para usá-la como uma Breakline na superfície, foi o que me motivou a desenvolver o seguinte comando usando a API C# do Civil 3D.

Com esse comando, posso desenhar uma Polyline diretamente no Profile View e,  em seguida, projetar essa Polyline como uma Polyline 3D para utilizá-la como Breakline na superfície. Para desenvolver esse comando, segui os seguintes passos:

1. Seleciono uma Polyline existente.

```c
PromptEntityOptions promptPolyline = new PromptEntityOptions("\n Selecione uma polyline : ");
promptPolyline.SetRejectMessage("\n Polyline não selecionada");
promptPolyline.AddAllowedClass(typeof(Polyline), true);
PromptEntityResult entityPolyline = editor.GetEntity(promptPolyline);
if (entityPolyline.Status != PromptStatus.OK) return;
```

2. Seleciono o Profile View.
```c
PromptEntityOptions promptProfileView = new PromptEntityOptions("\n Selecione um ProfileView: ");
promptProfileView.SetRejectMessage("\nProfileView não selecionado");
promptProfileView.AddAllowedClass(typeof(ProfileView), true);
PromptEntityResult entityProfileView = editor.GetEntity(promptProfileView);
if (entityProfileView.Status != PromptStatus.OK) return;
```

3. Crio um Profile vazio.
```c
                    ProfileView profileView = tx.GetObject(entityProfileView.ObjectId, OpenMode.ForWrite) as ProfileView;
                    double x = 0.0;
                    double y = 0.0;
                    if (profileView.ElevationRangeMode == ElevationRangeType.Automatic)
                    {
                        profileView.ElevationRangeMode = ElevationRangeType.UserSpecified;
                        profileView.FindXYAtStationAndElevation(profileView.StationStart, profileView.ElevationMin, ref x, ref y);
                    }
                    else
                        profileView.FindXYAtStationAndElevation(profileView.StationStart, profileView.ElevationMin, ref x, ref y);

                    ProfileViewStyle profileViewStyle = tx.GetObject(profileView.StyleId, OpenMode.ForRead) as ProfileViewStyle;

                    ObjectId layerId = (tx.GetObject(profileView.AlignmentId, OpenMode.ForRead) as Alignment).LayerId;

                    ObjectId profileStyleId = doc.Styles.ProfileStyles.FirstOrDefault();

                    ObjectId profileLabelSetStylesId = doc.Styles.LabelSetStyles.ProfileLabelSetStyles.FirstOrDefault();

                    ObjectId profByLayout = Profile.CreateByLayout("New Profile", profileView.AlignmentId, layerId, profileStyleId, profileLabelSetStylesId);

                    Profile profile = tx.GetObject(profByLayout, OpenMode.ForWrite) as Profile;

                    BlockTableRecord blockTableRecord = tx.GetObject(database.CurrentSpaceId, OpenMode.ForWrite) as BlockTableRecord;
```
4. Extraio as informações de geometria da Polyline e adiciono-as ao Profile vazio.
```c
                   //Invert the Polyline if the start coordinate is greater than the end coordinate
                   if (polyline != null && (polyline.StartPoint.X > polyline.EndPoint.X))
                   {
                       polyline.ReverseCurve();
                   }

                   if (polyline != null)
                   {
                       int numOfVert = polyline.NumberOfVertices - 1;
                       Point2d startSegment;
                       Point2d endSegment;
                       Point2d sampleSegment;
                       Point2d coodStartSeg;
                       Point2d coodEndSeg;
                       Point2d coodSampleSegment;

                       for (int i = 0; i < numOfVert; i++)
                       {
                           switch (polyline.GetSegmentType(i))
                           {
                               case SegmentType.Line:
                                   LineSegment2d lineSegment2dAt = polyline.GetLineSegment2dAt(i);
                                   startSegment = lineSegment2dAt.StartPoint;
                                   double difStartSegment_X = startSegment.X - x;
                                   double difStartSegment_Y = (startSegment.Y - y) / profileViewStyle.GraphStyle.VerticalExaggeration + profileView.ElevationMin;
                                   coodStartSeg = new Point2d(difStartSegment_X, difStartSegment_Y);

                                   endSegment = lineSegment2dAt.EndPoint;
                                   double difEndSegment_X = endSegment.X - x;
                                   double difEndSegment_Y = (endSegment.Y - y) / profileViewStyle.GraphStyle.VerticalExaggeration + profileView.ElevationMin;
                                   coodEndSeg = new Point2d(difEndSegment_X, difEndSegment_Y);

                                   profile.Entities.AddFixedTangent(coodStartSeg, coodEndSeg);
                                   break;
                               case SegmentType.Arc:
                                   CircularArc2d arcSegment2dAt = polyline.GetArcSegment2dAt(i);

                                   startSegment = arcSegment2dAt.StartPoint;
                                   double difStartSegmentArc_x = startSegment.X - x;
                                   double difStartSegmentArc_y = (startSegment.Y - y) / profileViewStyle.GraphStyle.VerticalExaggeration + profileView.ElevationMin;
                                   coodStartSeg = new Point2d(difStartSegmentArc_x, difStartSegmentArc_y);


                                   endSegment = arcSegment2dAt.EndPoint;
                                   double difEndSegmentArc_x = endSegment.X - x;
                                   double difEndSegmentArc_y = (endSegment.Y - y) / profileViewStyle.GraphStyle.VerticalExaggeration + profileView.ElevationMin;
                                   coodEndSeg = new Point2d(difEndSegmentArc_x, difEndSegmentArc_x);

                                   sampleSegment = arcSegment2dAt.GetSamplePoints(11)[5];
                                   double difMidSegmentArc_x = sampleSegment.X - x;
                                   double difMidSegmentArc_y = (sampleSegment.Y - y) / profileViewStyle.GraphStyle.VerticalExaggeration + profileView.ElevationMin;
                                   coodSampleSegment = new Point2d(difMidSegmentArc_x, difMidSegmentArc_y);

                                   profile.Entities.AddFixedSymmetricParabolaByThreePoints(coodStartSeg, coodSampleSegment, coodEndSeg);
                                   break;
                               case SegmentType.Coincident:
                                   break;
                               case SegmentType.Point:
                                   break;
                               case SegmentType.Empty:
                                   break;
                               default:
                                   break;
                           }
                       }
```
5. Crio uma Polyline 3D vazia.
```c
Polyline3d polyline3D = new Polyline3d();
blockTableRecord.AppendEntity(polyline3D);
```

6. Obtenho o Alinhamento associado ao Profile View para extrair as coordenadas Easting e Northing.
```c
ObjectId alignmentId = profileView.AlignmentId;

Alignment alignment = tx.GetObject(alignmentId, OpenMode.ForRead, false) as Alignment;
```
7. Percorro os PVI (Pontos de Interesse Vertical) do profile criado e adiciono as coordenadas e elevações dos PVI à Polyline 3D.
```c
foreach (ProfilePVI profilePVI in profile.PVIs)
{

    double offset = 0.0;
    double northing = 0.0;
    double easting = 0.0;
    double station = profilePVI.RawStation;
    double elevation = profilePVI.Elevation;

    // Get the coordinates easting and northing from Alignment
    alignment.PointLocation(station, offset, ref easting, ref northing);

    // Add the profile entity vertices to the 3D polyline
    Point3d point = new Point3d(easting, northing, elevation);
    PolylineVertex3d point3dVertex = new PolylineVertex3d(point);
    polyline3D.AppendVertex(point3dVertex);
    
}
```
8. Adiciono a Polyline 3D ao Model e removo o Profile criado.
```c
// Add the 3D polyline to the model space
tx.AddNewlyCreatedDBObject(polyline3D, true);

// Remove profile
profile.Erase();
```