export const routes = [
  { path: '/about', label: 'About', isActive: false },
  { path: '/challenges', label: 'Challenges', isActive: false },
  { path: '/team', label: 'Team', isActive: false },
  { path: '/mentors', label: 'Mentors', isActive: false }
]

export const mentors = [
  {
    name: 'Eduardo Vedes',
    location: 'PT',
    image: '/assets/team/eduardo.jpg',
    description: (
      <>
        <div>Self-taught developer, career changes (prev. Civil Engineer)</div>
        <div className="text-sm">Focused on the JavaScript ecosystem.</div>
        <div className="font-bold">
          Frontend Engineer at{' '}
          <a
            className="underline hover:no-underline"
            href="https://nxtedition.com/"
            target="_blank"
            rel="noopener noreferrer">
            nxtedition.com
          </a>
        </div>
        <div className="text-sm">
          freeCodeCamp Advocate, Tech Writer, iamfreeCodeCamp founder and
          mentor.
        </div>
      </>
    ),
    twitter: 'eduardovedes',
    linkedIn: 'evedes'
  },
  {
    name: 'Can Ural',
    location: 'FI',
    image: '/assets/team/can.jpg',
    description: (
      <>
        <div>
          Self-taught developer, career changer (prev. helicopter pilot).
        </div>
        <div className="text-sm">
          Focused on JavaScript, React and self-improvement.
        </div>
        <div className="font-bold">Full-stack Developer</div>
        <div className="text-sm">iamfreeCodeCamp team member and mentor.</div>
      </>
    ),
    twitter: 'urlDev',
    linkedIn: 'can-ural'
  }
]
export const team = [
  {
    name: 'Eduardo Vedes',
    location: 'PT',
    image: '/assets/team/eduardo.jpg',
    description: (
      <div>
        I&apos;m a Software Engineer born in the South of Portugal (1980).
        I&apos;m the husband of a beautiful wife and father of three amazing
        daughters. If you want to know more about me feel free to do it on{' '}
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
      </div>
    ),
    twitter: 'eduardovedes',
    linkedIn: 'evedes'
  },
  {
    name: 'Can Ural',
    location: 'FI',
    image: '/assets/team/can.jpg',
    description: (
      <div>
        I am Can, a Full Stack Developer. Previously, a Helicopter Pilot.
        <br /> Yes, you read that
        <span className="font-bold italic"> right</span>. I am a Helicopter
        Pilot changing careers. I always loved &quot;playing&quot; with
        computers; breaking them, fixing them. Now it&apos;s time to build
        things! Great, amazing, eye-catching, different things. I started
        writing my first line of code in 2019. Since then, I have been coding
        nearly every day. I am the kind of person that wakes up{' '}
        <span className="font-bold italic">at night </span>
        to fix an issue. Or thinks of
        <span className="font-bold italic"> n possible ways </span> to do
        something. I&apos;d like to think that I am proactive and hard-working
        (I think I am, it&apos;s just I couldn&apos;t prove it to myself yet).
        One last thing... I never stop. Never stop learning, never stop
        improving myself.
      </div>
    ),
    twitter: 'urlDev',
    linkedIn: 'can-ural'
  },
  {
    name: 'Dan Bloch',
    location: 'UK',
    image: '/assets/team/dan.jpg',
    description: (
      <div>
        Hello, I&apos;m Dan, a front-end developer-in-waiting who&apos;s also
        arrived here after changing careers. After 23 years as a reporter and in
        production for business magazines, I took voluntary redundancy in
        September 2020 and I&apos;ve been learning to code ever since. The past
        year has highlighted more than ever the inevitability of change &ndash;
        and how it&apos;s vital we embrace it. I&apos;m interested in languages,
        people, travel, history, music, film and politics. Don&apos;t know what
        the collective noun for owls is? Look it up!
      </div>
    ),
    twitter: 'urlDev',
    linkedIn: 'can-ural'
  }
]
