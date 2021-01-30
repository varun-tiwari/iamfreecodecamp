import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>About Me</title>
        <meta
          property="og:title"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="flex justify-center">
        <div className="h-screen text-6xl">#iamfreecodecamp</div>
      </div>
    </Layout>
  );
}
