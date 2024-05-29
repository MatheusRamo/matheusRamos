import Image from "next/image"
import Link from "next/link"
import Header from "../components/Header"
import Layout, { GradientBackground } from "../components/Layout"
import SEO from "../components/SEO"
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

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
                        <Image className="w-48 h-48 rounded-full"  src="https://twitter.com/GeofMatheus" width={400} height={400} />
                    </div>
                    <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
                        Matheus Ramos
                    </h3>

                    <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div>Engineering</div>
                        <div>{` • `}</div>
                        <div>Geophysics</div>
                        <div>{` • `}</div>
                        <div>Programming</div>
                    </div>


                    <div className="flex flex-row items-center justify-between pb-8">
                        <p className="p-2">
                            <Link href="mailto:geof.matheus@gmail.com">
                                <a> <FaEnvelope /> </a>
                            </Link>
                        </p>
                        <p className="p-2">
                            <Link href="https://www.linkedin.com/in/matheus-ramos-44730b181/">
                                <a target="_blank"> <FaLinkedin /> </a>
                            </Link>
                        </p>
                        <p className="p-2">
                            <Link href="https://github.com/MatheusRamo">
                                <a target="_blank"> <FaGithub /> </a>
                            </Link>
                        </p>
                        <p className="p-2">
                            <Link href="https://twitter.com/GeofMatheus">
                                <a target="_blank"> <FaTwitter /> </a>
                            </Link>
                        </p>
                    </div>

                    <p >
                        I am a Brazilian engineer passionate about geophysics and a programmer in my spare times.
                    </p>
                </div>
                <GradientBackground
                    variant="large"
                    className="fixed top-20 opacity-40 dark:opacity-60"
                />
                <GradientBackground
                    variant="small"
                    className="absolute bottom-0 opacity-20 dark:opacity-10"
                />

            </Layout>
        </>
    )
}