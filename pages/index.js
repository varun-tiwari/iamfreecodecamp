import Head from 'next/head';
import Layout from '../components/layout';
import Twitter from '../public/assets/icons/twitter.svg';

const Title = ({ id, children }) => {
  return (
    <div
      id={id}
      className="py-4 mt-8 text-4xl bg-gray-100 text-blue-500 border p-2">
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
          <div className="flex justify-center text-sm text-red-600 italic">
            Note: if you didn&apos;t have the opportunity to read the blog post
            that originated this movement you can read it later
            <a className="ml-1 underline hover:no-underline" href="#">
              here
            </a>
            !
          </div>
          <Title>The Importance of Being freeCodeCamp</Title>
          <div className="pt-8">Hi all 👋 !</div>
          <div className="pt-8">
            2020 wasn&apos;t an easy year and 2021 promises to keep us
            struggling to surpass the pandemic and a global economic crisis. A
            lot of us are grieving their family and friends. Others lost their
            jobs and are looking up for solutions to put food on the table.
          </div>
          <div className="pt-8">
            These are particular difficult times for everyone. With this in mind
            I&apos;ve started to think - in late December (2020) - on how could
            I help people worldwide.
          </div>
          <div className="pt-8">
            <a
              className="underline hover:no-underine"
              href="https://freecodecamp.org">
              freeCodeCamp
            </a>{' '}
            immediately came up to my mind as I always feel so privileged for
            having a stable and safe software consultancy business.
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
          <div className="pt-8">
            In the end I was so lucky on how freeCodeCamp changed my life that
            I&apos;ve decided to do a{' '}
            <span className="font-bold">brainstorm</span> to find ideas on how
            to help students to surpass their difficulties and get the
            appropriate slipstream to succeed.
          </div>
          <div className="pt-8">
            As a plus, with so many people loosing their jobs and looking for
            solutions to keep feeding their families I think there will be a
            great increase of students soon - it&apos; already happening - and
            this reiterates the fact that now is the time to{' '}
            <span className="font-bold">help more</span>!
          </div>
          <div className="text-3xl p-12 mt-8 border bg-blue-500 text-gray-50">
            &rdquo;As freeCodeCampers, what can we do to help other
            people?&rdquo;
          </div>
          <div className="pt-8">
            After some iteration and discussion I&apos;ve ended up with 3 main
            aspects I&apos;d enjoy to help with. And I think I&apos;ve got
            something for you. Yes, let&apos;s call it a{' '}
            <span className="font-bold">CHALLENGE</span>, as alone we&apos;re
            not able to do anything but together we can make the difference.
          </div>

          <div className="pt-8">
            Let&apos;s work hard to invest on freeCodeCamp through the leverage
            of 3 distinct vectors:
            <span className="font-bold"> Donate to freeCodeCamp</span>,
            <span className="font-bold"> Mentor Students</span> and
            <span className="font-bold"> Meet other Alumni</span>.
          </div>
          <div className="pt-8">
            We&apos;ll all be winning in the end and this is the importance of
            being freeCodeCamp and the beginning of the
            <span className="font-bold"> #iAmFreeCodeCamp</span> movement! 💙
          </div>
          <div className="text-3xl p-12 my-8 border bg-blue-500 text-gray-500">
            The main idea behind this challenge is to increase sustainability
            and invest our time contributing to freeCodeCamp in 3 distinct
            vectors:
            <div className="p-4">💰 Donate</div>
            <div className="p-4">🌈 Mentor students</div>
            <div className="p-4">💙 Meet alumni</div>
            <div className="pt-4">
              If you haven&apos;t read
              <a
                className="underline hover:no-underline px-2"
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
          <Title id="donate">1. Donate</Title>
          <div className="pt-8">
            There are a lot of ways to contribute to freeCodeCamp and the work
            of this wide and active community has been huge! But in the end
            there&apos;s something we need to have in mind. This nonprofit
            budget is relatively small and only due to a transparent and
            effective management it was possible to provide everything it has
            provided till today. You can read more about it in this article -
            <a
              className="mx-2 underline hover:nounderline"
              href="https://www.freecodecamp.org/news/freecodecamp-2020/">
              &rdquo;Developers Spend 1.3 Billion Minutes Using freeCodeCamp in
              2020, and Other Year-end Facts&rdquo;
            </a>{' '}
            - written by Quincy Larson on the 18th December 2020.
          </div>
          <div className="pt-8">
            So, in spite of contributing in several ways we must reinforce the
            raise of the operating budget through{' '}
            <span className="font-bold">increasing donations</span>.
          </div>
          <div className="pt-8">
            Can you imagine how far we can go if we&apos;re able to increase the
            available budget in 2021?
          </div>
          <div className="pt-8">
            Quincy Larson started this project injecting a lot of his own money.
            And there&apos;s no doubts about how honest and transparent the
            nonprofit is.
          </div>
          <div className="pt-8">
            If you have any doubts you can check this{' '}
            <a
              className="underline hover:no-underline"
              href="https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/">
              article
            </a>{' '}
            where Quincy explains &rdquo;How to Donate to freeCodeCamp - Ways To
            Give and Support the Mission&rdquo;.
          </div>
          <div className="flex flex-col items-center mt-8 bg-red-400 text-blue-50 p-12 text-4xl">
            <div>
              So, the first challenge is to donate monthly to freeCodeCamp!
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-xl py-8 bg-blue-500 text-gray-50">
            After donating you can tweet about it here to motivate other people
            do the same:
            <Twitter className="transition duration-500 ease-in-out py-6 h-24 w-24 hover:text-blue-400 cursor-pointer" />
          </div>
          <div className="pt-8"></div>
          <Title id="mentor">2. Mentor Students</Title>
          <div className="pt-8">Say something here...</div>
          <Title id="meet">3. Meet Alumni</Title>
          <div className="pt-8">Say something here...</div>
          <Title id="meet">Thank you and see you soon!</Title>
          <div className="pt-8">
            Dont&apos; forget to use the handler{' '}
            <span className="font-bold">@iAmFreeCodeCamp</span> and the tag{' '}
            <span className="font-bold">#iAmFreeCodeCamp</span> along with{' '}
            <span className="font-bold">@freeCodeCamp</span> and{' '}
            <span className="font-bold">#freeCodeCamp</span>
          </div>
          <div className="pt-8">
            Thank you for carefully reading all the content till the end. I want
            to say a big thank you to{' '}
            <a
              className="underline hover:no-underline"
              href="https://twitter.com/ossia">
              Quincy Larson
            </a>{' '}
            and to{' '}
            <a
              className="underline hover:no-underline"
              href="https://twitter.com/andrezzoid">
              {' '}
              André Jonas
            </a>{' '}
            who directly or indirectly helped me to iterate and to create the
            proper time & space for the idea to ripen.
          </div>
          <div className="pt-8">
            A big thank you also to this huge, wonderful, kind and warm
            community. Also a big shout-out to the Editorial Team who&apos;s
            helping freeCodeCamp News to grow so healthy, so rigorous, so well
            curated. Lots of hugs folks! 💙
          </div>
          <div className="pt-8">
            If you&apos;ve got a short question or message, please tweet to
            <a
              className="underline hover:no-underline"
              href="https://twitter.com/eduardovedes">
              @eduardovedes
            </a>{' '}
            and I&apos;ll get back to you as soon as possible. If it&apos;s a
            longer thing, or you don&apos;t want it to be public, please e-mail
            me (eduardo.vedes@gmail.com). I read all the emails and it&apos;s
            always a pleasure to provide all the help I can.
          </div>
        </div>
      </div>
    </Layout>
  );
}
