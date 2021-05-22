import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Layout from '../components/layout';

export default function Team() {
  return (
    <Layout>
      <div className=" mt-8 ">
        <div className="md:flex border-solid border-2 border-gray-200  rounded-md shadow-lg">
          <div className="bg-gray-100 p-8 w-full md:w-5/12 lg:w-2/5 xl:w-1/4 ">
            <img
              src="/assets/team/eduardo.jpg"
              alt=""
              className="w-40 h-40 sm:w-56 sm:h-56 rounded-full mx-auto"
            />
            <h1 className="text-blue-400 text-lg md:text-2xl flex justify-center mt-4">
              Eduardo Vedes
            </h1>
            <div className="flex justify-center mt-4 ">
              <a
                href={`https://twitter.com/eduardovedes`}
                target="_blank"
                rel="noreferrer noopener"
                className="my-auto">
                <FaTwitter className="w-6 h-6 md:w-8 md:h-8 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
              </a>
              <a
                href={`https://www.linkedin.com/in/evedes/`}
                target="_blank"
                rel="noreferrer noopener">
                <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 ml-4  hover:text-linkedIn-200 text-linkedIn-100 transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-7/12 lg:w-3/5 xl:w-3/4 px-4 py-8 sm:p-12">
            <h1>
              I&apos;m Eduardo Vedes, friends call me Edo and you can call me
              too! <br />
              <br />
              I&apos;m a Software Engineer born in the South of Portugal (1980).
              I&apos;m the husband of a beautiful wife and father of three
              amazing daughters. If you want to know more about me feel free to
              do it on{' '}
              <a
                className="underline hover:nounderline"
                href="https://eduardovedes.com">
                eduardovedes.com
              </a>
              . You might also be interested in knowing how I went from{' '}
              <a
                className="underline hover:nounderline"
                href="https://www.freecodecamp.org/news/from-civil-engineer-to-web-developer-with-freecodecamp/">
                Civil Engineer to Web Developer
              </a>{' '}
              using freeCodeCamp to learn to code.
            </h1>
          </div>
        </div>

        <div className="md:flex border-solid border-2 border-gray-200  rounded-md shadow-lg mt-8">
          <div className="bg-gray-100 p-8 w-full md:w-5/12 lg:w-2/5 xl:w-1/4 ">
            <img
              src="/assets/team/can.jpg"
              alt=""
              className="w-40 h-40 sm:w-56 sm:h-56 rounded-full mx-auto"
            />
            <h1 className="text-blue-400 text-lg md:text-2xl flex justify-center mt-4">
              Can Ural
            </h1>
            <div className="flex justify-center mt-4 ">
              <a
                href={`https://twitter.com/urlDev`}
                target="_blank"
                rel="noreferrer noopener"
                className="my-auto">
                <FaTwitter className="w-6 h-6 md:w-8 md:h-8 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
              </a>
              <a
                href={`https://www.linkedin.com/in/can-ural/`}
                target="_blank"
                rel="noreferrer noopener">
                <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 ml-4  hover:text-linkedIn-200 text-linkedIn-100 transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-7/12 lg:w-3/5 xl:w-3/4  px-4 py-8 sm:p-12">
            <h1>
              I am Can. <br /> I am a Full Stack Developer. Previously, a
              Helicopter Pilot. <br /> <br /> Yes, you read that
              <span className="font-bold italic"> right</span>. I am a
              Helicopter Pilot changing careers. I always loved
              &quot;playing&quot; with computers; breaking them, fixing them.
              Now it&apos;s time to build things! Great, amazing, eye-catching,
              different things. <br />
              <br /> I started writing my first line of code in 2019. Since
              then, I have been coding nearly every day. I am the kind of person
              that wakes up <span className="font-bold italic">at night </span>
              to fix an issue. Or thinks of
              <span className="font-bold italic"> n possible ways </span> to do
              something. I&apos;d like to think that I am proactive and
              hard-working (I think I am, it&apos;s just I couldn&apos;t prove
              it to myself yet).
              <br /> <br /> One last thing... I never stop. Never stop learning,
              never stop improving myself.
            </h1>
          </div>
        </div>
        <div className="md:flex border-solid border-2 border-gray-200  rounded-md shadow-lg mt-8">
          <div className="bg-gray-100 p-8 w-full md:w-5/12 lg:w-2/5 xl:w-1/4 ">
            <img
              src="/assets/team/dan1.jpg"
              alt=""
              className="w-40 h-40 sm:w-56 sm:h-56 rounded-full mx-auto"
            />
            <h1 className="text-blue-400 text-lg md:text-2xl flex justify-center mt-4">
              Dan Bloch
            </h1>
            <div className="flex justify-center mt-4 ">
              <a
                href={`https://twitter.com/bookim_danno`}
                target="_blank"
                rel="noreferrer noopener"
                className="my-auto">
                <FaTwitter className="w-6 h-6 md:w-8 md:h-8 hover:text-twitter-200 text-twitter-100 transition duration-300 ease-in-out" />
              </a>
              <a
                href={`https://www.linkedin.com/in/dan-bloch/`}
                target="_blank"
                rel="noreferrer noopener">
                <FaLinkedin className="w-6 h-6 md:w-8 md:h-8 ml-4  hover:text-linkedIn-200 text-linkedIn-100 transition duration-300 ease-in-out" />
              </a>
            </div>
          </div>

          <div className="w-full md:w-7/12 lg:w-3/5 xl:w-3/4  px-4 py-8 sm:p-12">
            <h1>
              Hello, I&apos;m Dan, a front-end developer-in-waiting who&apos;s
              also arrived here after changing careers. <br />
              <br />
              After 23 years as a reporter and in production for business
              magazines, I took voluntary redundancy in September 2020 and
              I&apos;ve been learning to code ever since. The past year has
              highlighted more than ever the inevitability of change &ndash; and
              how it&apos;s vital we embrace it.
              <br />
              <br />
              I&apos;m interested in languages, people, travel, history, music,
              film and politics.
              <br />
              <br />
              Don&apos;t know what the collective noun for owls is? Look it up!
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
