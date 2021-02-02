import Head from 'next/head';
import Layout from '../components/layout';

const Title = ({ children }) => {
  return (
    <div className="py-4 mt-8 text-4xl bg-gray-100 text-blue-500 border p-2">
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>#iAmFreeCodeCamp</title>
        <meta
          property="og:title"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <div className="flex justify-center text-2xl">
        <div className="w-full pt-8">
          <div className="pt-8">Hey everyone, 👋</div>
          <div className="pt-8">
            My name is{' '}
            <a
              className="underline hover:no-underline"
              href="https://twitter.com/eduardovedes">
              @eduardovedes
            </a>{' '}
            and I&apos;ve created this project so that you can join me in the
            #iAmFreeCodeCamp challenge.
          </div>
          <div className="pt-8">
            If you haven&apos;t read the article that originated it feel free to
            do it:
            <a
              className="underline hover:no-underline px-2"
              href="https://www.freecodecamp.org/news/p/fb5041e9-b097-4baf-ba5e-88b7a8043e2a/"
              target="_blank"
              rel="noreferrer noopener">
              &rdquo;The Importance Of Being freeCodeCamp&rdquo;
            </a>
          </div>
          <div className="pt-8">
            By the way, you can read my story{' '}
            <a
              className="underline hover:nounderline"
              href="https://www.freecodecamp.org/news/from-civil-engineer-to-web-developer-with-freecodecamp/">
              here
            </a>
            . That&apos;s not much of a story but it&apos;s my own, and I felt
            it was meaningful to share it with the world.
          </div>
          <Title>The Challenge</Title>
          <div className="text-3xl p-12 mt-8 border bg-blue-500 text-gray-500">
            The main idea behind this (triple) challenge is to increase
            sustainability of the nonprofit and invest our time contributing to
            freeCodeCamp in 3 distinct vectors:
            <div className="p-4">💰 Donate</div>
            <div className="p-4">🌈 Mentor students</div>
            <div className="p-4">💙 Meet alumni</div>
          </div>
          <div className="pt-8">
            This challenge is mostly directioned to Alumni, but students can
            also participate.
          </div>
          <div className="pt-8">
            So, if you&apos;re a Student you can start to pay it forward (if you
            have the possiblity, of course) accepting the first challenge! You
            can also follow @iAmFreeCodeCamp so that you can find a mentor
            (alumni) to help you guide your way through learning how to code!
          </div>
          <div className="pt-8">
            If you are an Alumni, you already work in the industry and have some
            experience. You&apos;re ready to take the 3 challenges! Donate,
            mentor a student and meet your colleagues! Have fun!
          </div>
          <div className="pt-8">We&apos;ll all be winning in the end!</div>
          <Title>The Rules</Title>
          <div
            id="donate"
            className="text-4xl mt-8 p-4 bg-blue-500 text-gray-50">
            Donate
          </div>
          <div className="bg-red-400 text-red-50 items-center p-12 text-6xl">
            <div>Make a monthly donation to freeCodeCamp during a year!</div>
          </div>
          <div className="text-xl p-12 bg-blue-500 text-gray-50">
            <div>
              You choose if you want to donate $5, $50 or $500 USD. What&apos;s
              really important is that you keep donating every month in a
              consistent way.
            </div>
            <div className="py-4">
              <a
                className="text-3xl underline hover:no-underline"
                href="https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/">
                How to donate to freeCodeCamp?
              </a>
            </div>
            <div>
              Tweet monthly about your donation (keep the value secret,
              that&apos;s not important at all) and about the importance of
              being freeCodeCamp. This way we can motivate more and more people
              to do it with us.
            </div>
          </div>
          <div
            id="mentor"
            className="text-4xl mt-20 p-4 bg-blue-500 text-gray-50">
            Mentor Students <span className="text-xl">(only for Alumni)</span>
          </div>
          <div className="bg-red-400 text-red-50 items-center p-12 text-6xl">
            Make yourself available to mentor a student, making a weekly one
            hour meeting (1:1)
          </div>
          <div className="text-xl p-12 bg-blue-500 text-gray-50">
            <div>
              You choose if you want to mentor one or more students. What&apos;s
              important here is to provide some guidance and answer in a more
              intimate way to all the questions students might have about
              learning to code, career change, jobs, skills, age, etc.
            </div>
            <div className="pt-8">
              Tweet monthly about it! We want to know about your mentoring
              experience and about your student progress! Be positive above all!
            </div>
          </div>
          <div
            id="meet"
            className="text-4xl mt-20 p-4 bg-blue-500 text-gray-50">
            Meet Alumni{' '}
            <span className="text-xl">
              (only for Alumni to meet one another)
            </span>
          </div>
          <div className="bg-red-400 text-red-50 p-12 text-6xl">
            Make yourself available to meet other alumni
          </div>
          <div className="text-xl p-12 bg-blue-500 text-gray-50">
            Maybe you come up with great ideas, projects, a job for a student.
            It will be fun to create this kind of networking.
            <div className="pt-8">
              Tweet monthly about it! Give a shout-out to your new friend!
            </div>
          </div>
          <div className="pt-8">
            Dont&apos; forget to use the handler{' '}
            <span className="font-bold">@iAmFreeCodeCamp</span> and the tag{' '}
            <span className="font-bold">#iAmFreeCodeCamp</span> along with{' '}
            <span className="font-bold">@freeCodeCamp</span> and{' '}
            <span className="font-bold">#freeCodeCamp</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
