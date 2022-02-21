import { getPost, getAllPosts } from '../services/api.js'
import RenderMarkdown from '../components/RenderMarkdown'

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';


export default function Page({ post }) {
    return (
        <Layout>
            <SEO title={post.fav} description={post.description}/>
            <Header name="Matheus Ramos" />
            <article className="px-6 md:px-2 sm:px-2">
                <header>
                    <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
                        {post.title}
                    </h1>
                    <p className="text-xl mb-4">{post.description}</p>
                </header>
                <main>
                    <article className="sm:px-2 prose dark:prose-dark">
                        <RenderMarkdown children={post.content} />
                    </article>
                </main>

            </article>
            <Footer copyrightText="Matheus Ramos" />
            <GradientBackground
                variant="large"
                className="absolute -top-32 opacity-30 dark:opacity-50"
            />
            <GradientBackground
                variant="small"
                className="absolute bottom-0 opacity-20 dark:opacity-10"
            />
        </Layout>
    )
}

export function getStaticProps({ params }) {
    const post = getPost(params.slug, [
        'title',
        'date',
        'author',
        'slug',
        'content',
        'description',
        'fav'
    ])

    return {
        props: { post }
    }
}

export function getStaticPaths() {
    // Buscamos todos os slugs e date de todos os posts
    const posts = getAllPosts(['slug', 'date']);

    return {
        /**
         * Retornamos para cada rota o parâmetro slug,
         * para conseguirmos usá-lo na função
         * getStaticProps acima.
         */
        paths: posts.map(post => ({
            params: {
                slug: post.slug
            }
        })),
        /**
         * A opção fallback: false fala para o Next.js
         * não tentar executar essa rota se o arquivo
         * markdown para ela não existir
         */
        fallback: false
    };
}