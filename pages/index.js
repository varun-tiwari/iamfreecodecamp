import Head from 'next/head';
import Layout from '../components/layout';
import {
  TweetDonation,
  TweetMentorship,
  TweetMeeting
} from '../components/twitter-buttons';

const Title = ({ children }) => {
  return (
    <div className="py-4 mt-8 text-2xl sm:text-4xl bg-gray-100 text-blue-500 border p-2">
      {children}
    </div>
  );
};

const HeaderImage = () => {
  return (
    <img
      className="border h-200px sm:h-300px md:h-400px lg:h-500px w-full object-cover object-bottom"
      src="/assets/header/header-image.jpg"
      alt="do something great"
    />
  );
};

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
      <div>
        <div className="w-full pt-8">
          <div>Hey everyone, 👋</div>
          <div className="pt-8">
            Welcome to the&nbsp;
            <span className="font-bold">#iamfreeCodeCamp Challenge</span>.
            We&apos;d love you to join us on this 3x quest to{' '}
            <span className="font-bold">donate</span>,{' '}
            <span className="font-bold">mentor</span> students and{' '}
            <span className="font-bold">meet</span> other Alumni. You might want
            to know more about it, so here&apos;s the
            <a
              className="underline hover:no-underline px-2"
              href="https://blog.eduardovedes.com/introducing-iamfreecodecamp-a-movement-to-raise-awareness-for-the-open-source-community"
              target="_blank"
              rel="noreferrer noopener">
              blog post
            </a>
            that originated this idea.
          </div>
          <Title>TL;DR</Title>
          <div className="text-xl sm:text-3xl md:p-12 p-8 mt-8 border bg-blue-500 text-gray-500">
            The main idea behind this (triple) challenge is to increase
            sustainability of the nonprofit and invest our time contributing to
            freeCodeCamp in 3 distinct vectors:
            <div className="flex items-center justify-between py-4">
              <div>
                <span className="mr-1">💰</span> Donate
              </div>
              <div>
                <TweetDonation />
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <div>
                <span className="mr-1">🌈 </span>Mentor students
              </div>
              <div>
                <TweetMentorship />
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <div>
                <span className="mr-1">💙</span> Meet alumni
              </div>
              <div>
                <TweetMeeting />
              </div>
            </div>
            <div className="py-4">RULES:</div>
            <div className="py-1">
              1. Pick one, two or the three challenges! Check how to donate{' '}
              <a
                className="text-xl sm:text-3xl underline hover:no-underline"
                href="https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/">
                here
              </a>
              .
            </div>
            <div className="py-1">
              2. Tweet about it using the buttons above 👆
            </div>
            <div className="py-1">
              3. Focus on helping people! Feeling great about it will be our
              profit!! 🎉
            </div>
          </div>
          <Title>The Challenge</Title>
          <div className="pt-8">
            This challenge is more directioned towards fCC Alumni, but students
            and friends can also participate.
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
            mentor a student and meet your colleagues!
          </div>
          <div className="pt-8">
            One thing I&apos;m sure! We&apos;ll all be winning in the end! Have
            fun! 🎉
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
              <TweetDonation />
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
            <TweetMentorship />
          </div>
          <div
            id="meet"
            className="text-3xl font-bold mt-8 p-4 bg-blue-500 text-gray-50">
            03. MEET ALUMNI
            <span className="ml-2 text-xl">
              (only for Alumni to meet one another)
            </span>
          </div>
          <div className="bg-red-400 text-gray-50 items-center p-4 sm:p-12 text-4xl sm:text-6xl">
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
            <TweetMeeting />
          </div>
          <div className="pt-8">Rock on!! Let&apos;s do it Peeps!</div>
        </div>
      </div>
    </Layout>
  );
}
