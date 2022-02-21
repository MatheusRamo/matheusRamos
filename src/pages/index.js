
import Link from 'next/link'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import SEO from '../components/SEO';
import { getAllPosts } from '../services/api.js'

const Index = ({ posts }) => {
    return (
        <>
            <Layout>
            <SEO title="Matheus Ramos" description="geo" />
                <Header name="Matheus Ramos" />
                <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          Geophysics
        </h1>

                <ul className="w-full">
                {
                    posts.map(post =>
                        <li key={post.slug} 
                        className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0">
                            <Link href={`/${post.slug}`}>
                                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4"> 
                                <p className="uppercase mb-3 font-bold opacity-60"> {post.title}</p>
                                <h2 className="text-2xl md:text-3xl">{post.description}</h2>
                                <ArrowIcon className="mt-4" />
                                </a>
                            </Link>
                        </li>
                    )
                }
                </ul>
                </main>
                <Footer copyrightText="Matheus Ramos" />
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


export function getStaticProps() {
    const posts = getAllPosts(['title', 'date', 'slug','description'])

    return {
        props: { posts }
    }
}


export default Index