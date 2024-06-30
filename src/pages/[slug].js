import { getPost, getAllPosts } from '../services/api.js'
import RenderMarkdown from '../components/RenderMarkdown'

import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import SEO from '../components/SEO';
import Link from 'next/link';
import ArrowIcon from '../components/ArrowIcon'

import { useEffect } from 'react'
import 'katex/dist/katex.min.css'
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'
import Footer from '../components/Footer.js';



export default function Page({ post }) {

  useEffect(() => {
    renderMathInElement(document.body, {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
    ]
    });
  }, [post.content]);
 
  return (
    <Layout>
      <SEO title={post.title} description={post.description} />
      <Header name="Matheus Ramos" />
      <article className="lg:px-8 px-6 md:px-2 sm:px-4">
        <div>
        <p className="text-center text-gray-600 dark:text-gray-400 text-base mb-2  pb-2"> {post.date}</p>
          <h1 className="text-2xl border-b pb-4 text-center mb-12">
            {post.title}
          </h1>
          
        </div>
        <main>
          <article className="lg:px-8 sm:px-2 sm:text-center prose dark:prose-dark">
            <RenderMarkdown children={post.content} />
          </article>
        </main>

      </article>

      <div className="grid md:grid-cols-2 lg:-mx-24 mt-12">
        {post.prev && (
          <Link href={`/${post.prev.slug}`}>
            <a className="py-8 px-10 text-center md:text-right first:rounded-t-lg md:first:rounded-tr-none md:first:rounded-l-lg last:rounded-r-lg first last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 last:border-t md:border-r-0 md:last:border-r md:last:rounded-r-none flex flex-col">
              <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                Anterior
              </p>
              <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                {post.prev.title}
              </h4>
              <ArrowIcon className="transform rotate-180 mx-auto md:mr-0 mt-auto" />
            </a>
          </Link>
        )}
        {post.next && (
          <Link href={`/${post.next.slug}`}>
            <a className="py-8 px-10 text-center md:text-left md:first:rounded-t-lg last:rounded-b-lg first:rounded-l-lg md:last:rounded-bl-none md:last:rounded-r-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-t-0 first:border-t first:rounded-t-lg md:border-t border-b-0 last:border-b flex flex-col">
              <p className="uppercase text-gray-500 mb-4 dark:text-white dark:opacity-60">
                Próximo
              </p>
              <h4 className="text-2xl text-gray-700 mb-6 dark:text-white">
                {post.next.title}
              </h4>
              <ArrowIcon className="mt-auto mx-auto md:ml-0" />
            </a>
          </Link>
        )}
      </div>
      <Footer/>
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

export async function getStaticProps({ params }) {

  const getNextPostBySlug = (slug) => {
    const posts = getAllPosts(['slug', 'title', 'filePath'])
    const currentFileName = `${slug}.md`;
    const currentPost = posts.find((post) => post.filePath === currentFileName);
    const currentPostIndex = posts.indexOf(currentPost);

    const post = posts[currentPostIndex + 1];
    // no prev post found
    if (!post) return null;

    const nextPostSlug = post?.filePath.replace(/\.md?$/, '');

    return {
      title: post.title,
      slug: nextPostSlug,
    }
  }


  const getPreviousPostBySlug = (slug) => {
    const posts = getAllPosts(['slug', 'title', 'filePath'])
    const currentFileName = `${slug}.md`;
    const currentPost = posts.find((post) => post.filePath === currentFileName);
    const currentPostIndex = posts.indexOf(currentPost);

    const post = posts[currentPostIndex - 1];
    // no prev post found
    if (!post) return null;

    const previousPostSlug = post?.filePath.replace(/\.md?$/, '');

    return {
      title: post.title,
      slug: previousPostSlug,
    }
  }



  const prevPost = getPreviousPostBySlug(params.slug)
  const nextPost = getNextPostBySlug(params.slug)


  const post = getPost(params.slug, [
    'title',
    'date',
    'author',
    'slug',
    'content',
    'description'
  ])
  post.prev = prevPost
  post.next = nextPost


  return {
    props: {
      post
    }
  }
}

export function getStaticPaths() {
  // Buscamos todos os slugs e date de todos os posts
  const posts = getAllPosts(['slug']);




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