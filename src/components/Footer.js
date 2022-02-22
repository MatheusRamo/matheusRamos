import Link from "next/link"
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center mt-16">
                <div className="flex flex-row justify-items-center pt-8">
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

                <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400" >
                <div>Matheus Ramos</div>
                <div>{` • `}</div>
                <div>{`© ${new Date().getFullYear()}`}</div>
                <div>{` • `}</div>
                <Link href="/">
                    <a>Matheus Ramos</a>
                </Link>
            </div>

            </div>


            

        </footer>
    )
}