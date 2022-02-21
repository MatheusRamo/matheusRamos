import Head from 'next/head'

export default function SEO({ title, description }) {
  return (
    <Head>
      <link rel="icon" href="/logo.png" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
    </Head>
  );
}