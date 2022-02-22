import Image from "next/image";
import Header from "../components/Header";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function About() {
    return (
        <>
            <Layout>
                <SEO title="About - Matheus Ramos" description="about Matheus Ramos" />
                <Header />

                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 pb-8">
                        About me
                    </h1>
                    <div className="w-48 h-48 rounded-full">
                        <Image className="w-48 h-48 rounded-full" src="/myphoto.jpg" width={500} height={500} />
                    </div>
                    <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                        Matheus Ramos
                    </h3>

                    <div className="dark:text-gray-400">
                        Geophysics
                    </div>

                    <div className="dark:text-gray-400 pb-8">
                        Federal University of Western Pará
                    </div>

                    <p >
                        I am a Brazilian geophysics student.
                    </p>
                </div>
            </Layout>
        </>
    )
}