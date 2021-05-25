import { TextBlock } from '../../components'

const Tldr = () => {
  return (
    <>
      <TextBlock>
        <div className="text-3xl">Hey everyone 👋</div>
        <div className="pt-4">
          Welcome to &nbsp;{' '}
          <span className="font-bold">
            #iamfreeCodeCamp, a movement to raise awareness for the open source
            community!
          </span>
          !
        </div>
      </TextBlock>
      <div className="sm:flex">
        <TextBlock className="sm:w-1/2 lg:w-1/4">
          <div className="text-2xl font-bold">TL;DR Quick Menu</div>
          <ul className="pt-2 space-y-1">
            <li>
              🌍 &nbsp;{' '}
              <a className="underline hover:no-underline" href="#about">
                About
              </a>
            </li>
            <li>
              🏆 &nbsp;{' '}
              <a className="underline hover:no-underline" href="#challenges">
                The Challenges
              </a>
            </li>
            <li>
              🧑‍🏫 &nbsp;{' '}
              <a className="underline hover:no-underline" href="#mentors">
                Mentors
              </a>
            </li>
            <li>
              🦄 &nbsp;{' '}
              <a className="underline hover:no-underline" href="#team">
                Team
              </a>
            </li>
          </ul>
        </TextBlock>
        <TextBlock className="sm:w-1/2 lg:w-3/4">
          <div className="bg-yellow-300 shadow-lg text-gray-700 rounded-md px-8 py-12">
            <div className="text-red-500 text-4xl font-bold">
              Are you looking for a mentor or to provide FREE mentorship?
            </div>
            <div className="font-bold">
              Join us in our &nbsp;
              <a
                className="font-bold underline hover:no-underline"
                rel="noopener noreferrer"
                href="https://discord.gg/kp3NQNKW9J"
                target="_blank">
                Discord
              </a>
              &nbsp; channel and let&apos;s have a chat!
            </div>
          </div>
        </TextBlock>
      </div>
      <TextBlock className="text-white">
        <div className="bg-red-500 shadow-lg rounded-md px-8 py-12">
          <div className="text-3xl font-bold">
            If you&apos;ve arrived to this page and you don&apos;t know what
            &nbsp;
          </div>
          <div className="text-4xl font-bold">freeCodeCamp is, HOLD FAST!</div>
          <div className="py-2">
            Sign-up to{' '}
            <a
              className="font-bold underline"
              href="https://www.freecodecamp.org"
              rel="noopener noreferrer"
              target="_blank">
              freeCodeCamp
            </a>{' '}
            and start learning to code today!
          </div>
          <div className="text-3xl font-bold py-2">
            It&apos;s FREE as in FREEDOM!
          </div>
          <div>
            Don&apos;t forget to follow us on &nbsp;
            <a
              className="font-bold underline"
              href="https://twitter.com/iamfreecodecamp"
              rel="noopener noreferrer"
              target="_blank">
              twitter
            </a>
            &nbsp; and to request a meeting with a mentor just to give you an
            overview or to walk you through the first{' '}
            <span className="font-bold">GROWING PAINS!</span>
          </div>
          <div className="text-2xl font-bold">
            There are no dumb questions! We&apos;re here to support you!
          </div>
        </div>
      </TextBlock>
    </>
  )
}

export default Tldr
