import Head from 'next/head';
import Layout from '../components/layout';

const Title = ({ children }) => {
  return (
    <div className="py-4 text-4xl bg-gray-100 text-blue-500 border p-2">
      {children}
    </div>
  );
};

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
      <div className="flex justify-center text-2xl">
        <div className="w-full py-8">
          <Title>The Importance of Being freeCodeCamp</Title>
          <div className="pt-8">Hi all 👋, welcome to #iAmFreeCodeCamp!</div>
          <div className="pt-8">
            2020 wasn&apos;t an easy year and 2021 promises to keep us
            struggling to surpass pandemic and a global economic crisis. A lot
            of us are grieving their family and friends. Others lost their jobs
            and are looking up for solutions to put food on the table. These are
            particular difficult times for everyone.
          </div>
          <div className="text-3xl p-12 my-8 border bg-blue-500 text-gray-500">
            The main idea behind this site is to increase sustainability and
            invest our time contributing to freeCodeCamp in three distinct
            vectors:
            <div className="p-4">💰 Donate</div>
            <div className="p-4">🌈 Mentor students</div>
            <div className="p-4">💙 Meet alumni</div>
            <div className="pt-4">
              If you haven&apos;t read
              <a
                className="underline hover:no-underline hover:bg-blue-800 hover:text-gray-50 px-2"
                href="https://www.freecodecamp.org/news/p/fb5041e9-b097-4baf-ba5e-88b7a8043e2a/"
                target="_blank"
                rel="noreferrer noopener">
                &rdquo;The Importance Of Being freeCodeCamp&rdquo;
              </a>
              please fell free to do it! That&apos;s the blog post that
              originated this movement!
            </div>
            <div className="pt-4">
              No matter if you&apos;re a student, an alumni or a freeCodeCamp
              friend we challenge you to join us reinforcing the three vectors
              above ☝.
            </div>
          </div>
          <Title>1. Donate</Title>
          <div className="py-8">Say something here...</div>
          <Title>2. Mentor Students</Title>
          <div className="py-8">Say something here...</div>
          <Title>2. Meet Alumni</Title>
          <div className="py-8">Say something here...</div>
        </div>
      </div>
    </Layout>
  );
}
