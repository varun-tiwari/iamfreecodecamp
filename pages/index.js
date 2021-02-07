import Head from 'next/head';
import Layout from '../components/layout';

const Title = ({ children }) => {
  return (
    <div className="py-4 mt-8 text-2xl sm:text-4xl bg-gray-100 text-blue-500 border p-2">
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>#iamfreeCodeCamp</title>
        <meta
          property="og:title"
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <div>
        <div className="w-full pt-8">
          <div className="pt-8">Hey everyone, 👋</div>
          <div className="pt-8">
            My name is{' '}
            <a
              className="underline hover:no-underline"
              href="https://twitter.com/eduardovedes">
              @eduardovedes
            </a>{' '}
            and I&apos;ve created this project so that you can join me on the
            #iamfreeCodeCamp challenge.
          </div>
          <div className="pt-8">
            If you haven&apos;t read the article that originated it feel free to
            do it:
            <a
              className="underline hover:no-underline px-2"
              href="https://blog.eduardovedes.com/introducing-iamfreecodecamp-a-movement-to-raise-awareness-for-the-open-source-community"
              target="_blank"
              rel="noreferrer noopener">
              Introducing #iamfreeCodeCamp – A Movement to Raise Awareness for
              the Open Source Community
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
          <div className="text-2xl sm:text-3xl p-12 mt-8 border bg-blue-500 text-gray-500">
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
            can also follow{' '}
            <a
              className="underline hover:no-underline"
              href="https://twitter.com/iamfreecodecamp"
              targe="_blank"
              rel="noopener noreferrer">
              @iamfreecodecamp
            </a>{' '}
            so that you can find a mentor (alumni) to help you guide your way
            through learning how to code!
          </div>
          <div className="pt-8">
            If you are an Alumni, you already work in the industry and have some
            experience. You&apos;re ready to take the 3 challenges! Donate,
            mentor a student and meet your colleagues! Have fun! 🎉
          </div>
          <div className="pt-8">
            One thing I&apos;m sure! We&apos;ll all be winning in the end!
          </div>
          <Title>The Rules</Title>
          <div
            id="donate"
            className="text-3xl font-bold mt-8 p-4 bg-blue-500 text-gray-50">
            01. DONATE
          </div>
          <div className="bg-red-400 text-gray-50 items-center p-4 sm:p-12 text-4xl sm:text-6xl">
            Make a monthly donation to freeCodeCamp during a year!
          </div>
          <div className="text-xl p-4 sm:p-12 bg-blue-500 text-gray-50">
            <div>
              You choose if you want to donate $5, $50 or $500 USD. What&apos;s
              really important is that you keep donating every month in a
              consistent way.
            </div>
            <div className="pt-4">
              <a
                className="text-xl sm:text-3xl underline hover:no-underline"
                href="https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/">
                How to donate to freeCodeCamp?
              </a>
            </div>
            <div>
              <div className="font-bold text-xl sm:text-2xl pt-4">
                Tweet monthly about your donation and about the importance of
                being freeCodeCamp.
              </div>
              <div>#iamfreeCodeCamp @iamfreecodecamp</div>
              <div>
                This way we can motivate more and more people to do it with us.
              </div>
              <div className="flex justify-end">
                <a
                  href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                  className="twitter-share-button"
                  data-size="large"
                  data-text="#iamfreeCodeCamp Challenge 1 accepted! This year I&#39;m donating $XX monthly to improve nonprofit sustainability and help more students to learn how to code during these hard times. Thank you @freeCodeCamp, thank you @ossia! 💙"
                  data-url="https://iamfreecodecamp.org"
                  data-hashtags="iamfreeCodeCamp #freeCodeCamp"
                  data-show-count="false">
                  Tweet
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"></script>
              </div>
            </div>
          </div>
          <div
            id="mentor"
            className="text-3xl font-bold mt-8 p-4 bg-blue-500 text-gray-50">
            02. MENTOR STUDENTS
            <span className="ml-2 text-xl">(only for Alumni)</span>
          </div>
          <div className="bg-red-400 text-gray-50 items-center p-4 sm:p-12 text-4xl sm:text-6xl">
            Make yourself available to mentor a student, making a weekly one
            hour meeting (1:1)
          </div>
          <div className="text-xl p-4 sm:p-12 bg-blue-500 text-gray-50">
            <div>
              You choose if you want to mentor one or more students. What&apos;s
              important here is to provide some guidance and answer in a more
              intimate way to all the questions students might have about
              learning to code, career change, jobs, skills, age, etc.
            </div>
            <div className="pt-4">
              You can share your stories, prescribe a good book, a good talk.
              Motivate people, make them fly!
            </div>
            <div className="font-bold text-2xl pt-4">
              Tweet monthly about it! We want to know about your mentoring
              experience and about your students progress! Be positive above
              all!
            </div>
            <div>#iamfreeCodeCamp @iamfreecodecamp</div>
            <div>
              This way we can provide a more personal support to help surpassing
              the growing pains of learning to code.
            </div>
            <div className="flex justify-end">
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-size="large"
                data-text="#iamfreeCodeCamp Challenge 2 accepted! I&#39;m making myself available to mentor a freeCodeCamp student on a weekly basis! Please RT for reach! DMs are open everyone! Thank you @freeCodeCamp, thank you @ossia! 💙"
                data-url="https://iamfreecodecamp.org"
                data-hashtags="iamfreeCodeCamp #freeCodeCamp"
                data-show-count="false">
                Tweet
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"></script>
            </div>
          </div>
          <div
            id="meet"
            className="text-3xl font-bold mt-8 p-4 bg-blue-500 text-gray-50">
            03. MEET ALUMNI
            <span className="ml-2 text-xl">
              (only for Alumni to meet one another)
            </span>
          </div>
          <div className="bg-red-400 text-gray-50 p-12 text-6xl">
            Make yourself available to meet other alumni
          </div>
          <div className="text-xl p-12 bg-blue-500 text-gray-50">
            Maybe together you come up with great ideas, projects, a job for a
            student. It will be fun to create this kind of networking. Due to
            pandemics we&apos;ve been locked down. This can be the perfect
            &rdquo;water cooler&rdquo;.
            <div className="font-bold text-2xl pt-4">
              Tweet about it! Give a shout-out to your new friend and always be
              thankful for the amazing opportunity!!
            </div>
            <div>#iamfreeCodeCamp @iamfreecodecamp</div>
            <div className="flex justify-end">
              <a
                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                className="twitter-share-button"
                data-size="large"
                data-text="#iamfreeCodeCamp Challenge 3 accepted! I&#39;m making myself available to meet other freeCodeCamp Alumni! RT for reach! DMs are open everyone! Thank you @freeCodeCamp, thank you @ossia! 💙"
                data-url="https://iamfreecodecamp.org"
                data-hashtags="iamfreeCodeCamp #freeCodeCamp"
                data-show-count="false">
                Tweet
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charset="utf-8"></script>
            </div>
          </div>
          <div className="pt-8">
            Again, dont&apos; forget to use the handler{' '}
            <span className="font-bold">@iamfreecodecamp</span> and the tag{' '}
            <span className="font-bold">#iamfreeCodeCamp</span>
          </div>
          <div className="pt-8">Rock on!! Let&apos;s do it Peeps!</div>
        </div>
      </div>
    </Layout>
  );
}
