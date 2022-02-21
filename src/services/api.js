import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'

const postDirectory = join(process.cwd(), 'src/posts')

function getMarkdownFiles(){
    return fs.readdirSync(postDirectory)
}

export function getPost(slugOrFilename, fields = []){
    // remover o .md dos posts
    const slug = slugOrFilename.replace(/\.md$/,'')

    // nome do post com o .md
    const directory = join(postDirectory, `${slug}.md`)

    // ler o conteudo do post
    const fileContent = fs.readFileSync(directory, 'utf-8')

    // buscar o conteudo do post com o matter
    const {data, content} = matter(fileContent)

    // filtrar o campo de cada post
    const post = {}
    fields.forEach(field => {
        if(field === 'content') post[field] = content
        if(field === 'slug') post[field] = slug
        if(field === 'filePath') post[field] = slugOrFilename
        if(data[field]) post[field] = data[field]

    })


    // retornar o post filtrado
    return post

}

export function getAllPosts(fields=[]) {
    const slugs = getMarkdownFiles()

    const posts = slugs.
    map(slug => getPost(slug, fields)).
    sort((a,b)=> new Date(b.date) - new Date(a.date))

    return posts
}
