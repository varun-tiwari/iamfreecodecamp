import Head from 'next/head'
import { About, Challenges, Mentors, Team, Tldr } from '../sections'
import { HeaderImage, Layout } from '../components'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>#iamfreeCodeCamp</title>
        <meta
          property="og:title"
          content="#iamfreeCodeCamp Challenge"
          key="title"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <HeaderImage />
      <Tldr />
      <About />
      <Challenges />
      <Mentors />
      <Team />
    </Layout>
  )
}
