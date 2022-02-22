import Link from "next/link"
import Header from "../components/Header"
import Layout, { GradientBackground } from "../components/Layout"
import SEO from "../components/SEO"
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Contact() {
    return (
        <>
            <Layout>
                <SEO title="Contact - Matheus Ramos" description="contact Matheus Ramos" />
                <Header />

                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 pb-1">
                        Contact
                    </h1>
                    <p className="pt-1 pb-2 text-2xl font-bold leading-8 tracking-tight">
                        How to reach me online
                    </p>

                    <p className="dark:text-white text-center">
                    These are the best ways to reach me online:
                    </p>
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
                            <Link href="https://twitter.com/GeofMatheus">
                                <a target="_blank"> <FaTwitter /> </a>
                            </Link>
                        </p>
                    </div>
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