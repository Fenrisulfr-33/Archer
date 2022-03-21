import Head from 'next/head';
import HomeContent from '../data/home_content.mdx'
import Article from '../components/article/Article/Article';

export default function Home() {
  return (
    <>
      <Head>
        <title>Archer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Article>
        <HomeContent />
      </Article>
    </>
  )
}