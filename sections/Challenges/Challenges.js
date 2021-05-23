import { Title, TextBlock } from '../../components'
import {
  TweetDonation,
  TweetMeeting,
  TweetMentorship
} from '../../components/twitter-buttons'

const Challenges = () => {
  return (
    <div id="challenges">
      <Title>The Challenges</Title>
      <TextBlock>
        <div className="font-bold text-4xl">💰 &nbsp;Donate</div>
      </TextBlock>
      <TextBlock>
        You choose if you want to donate $5, $50 or $500 USD. What&apos;s really
        important here is that you keep donating every month in a consistent
        way.
      </TextBlock>
      <TextBlock>
        <div className="flex flex-col gap-4 text-gray-700 bg-yellow-300 px-8 py-12 text-xl sm:text-3xl rounded-md shadow-lg">
          <a
            className="underline hover:no-underline"
            href="https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/"
            target="_blank"
            rel="noopener noreferrer">
            - Donations Page
          </a>
          <a
            className="underline hover:no-underline"
            href="https://www.freecodecamp.org/news/how-to-donate-to-free-code-camp/"
            target="_blank"
            rel="noopener noreferrer">
            - How to donate to freeCodeCamp?
          </a>
          <a
            className="underline hover:no-underline"
            href="https://www.freecodecamp.org/news/building-a-data-science-curriculum-with-advanced-math-and-machine-learning/"
            target="_blank"
            rel="noopener noreferrer">
            - We&apos;re Building a Data Science Curriculum with Advanced
            Mathematics and Machine Learning
          </a>
          <a
            className="underline hover:no-underline"
            href="https://darrellsilver.medium.com/why-im-donating-150k-to-freecodecamp-to-help-fund-their-next-big-curriculum-ffb7ff4ae828"
            target="_blank"
            rel="noopener noreferrer">
            - Why I’m donating $150k to freeCodeCamp to help fund their advanced
            math & machine learning curriculum
          </a>
        </div>
      </TextBlock>
      <TextBlock>
        <div className="font-bold text-xl sm:text-2xl pt-4">
          Tweet monthly about your donation and about the importance of being
          freeCodeCamp.
        </div>
        <div className="pt-2 text-sm">
          <TweetDonation />
          Use the tags #iamfreeCodeCamp, #freeCodeCamp and the handlers
          @freeCodeCamp and @iamfreecodecamp
        </div>
        <div className="pt-2">
          This way we can motivate more and more people to do it with us. Every
          penny is important, so no matter the size, but the contribution
          &quot;per se&quot;.
        </div>
      </TextBlock>
      <TextBlock>
        <div className="font-bold text-4xl">🧑‍🏫 &nbsp;Mentor Students</div>
      </TextBlock>
      <TextBlock>
        Make yourself available to mentor a student, making an every other week
        one hour meeting (1:1).
      </TextBlock>
      <TextBlock>
        You choose if you want to mentor one or more students. What&apos;s
        important here is to provide some guidance and answer in a more intimate
        way to all the questions students might have about learning to code,
        career change, jobs, skills, age, etc.
      </TextBlock>
      <TextBlock>
        You can share your stories, prescribe a good book, a good talk.
      </TextBlock>
      <TextBlock>
        <div className="font-bold text-2xl">
          Motivate people, make them fly!
        </div>
      </TextBlock>
      <TextBlock>
        <div className="font-bold text-xl sm:text-2xl pt-4">
          Tweet monthly about it! We want to know about your mentoring
          experience and about your students progress! Be positive above all!
        </div>
        <div className="pt-2 text-sm">
          <TweetMentorship />
          Use the tags #iamfreeCodeCamp, #freeCodeCamp and the handlers
          @freeCodeCamp and @iamfreecodecamp
        </div>
      </TextBlock>
      <TextBlock>
        This way we can provide a more personal support to help surpassing the
        growing pains of learning to code.
      </TextBlock>
      <TextBlock>
        <div className="font-bold text-4xl">🙃 &nbsp;Meet alumni</div>
      </TextBlock>
      <TextBlock>Make yourself available to meet other alumni</TextBlock>
      <TextBlock>
        Maybe together you come up with great ideas, projects, a job for a
        student. It will be fun to create this kind of networking. Due to
        pandemic we&apos;ve been locked down. This can be the perfect
        &rdquo;water cooler&rdquo;.
        <div className="font-bold text-xl sm:text-2xl pt-4">
          Tweet about it! Give a shout-out to your new friend and always be
          thankful for the amazing opportunity!!
        </div>
        <div className="pt-2 text-sm">
          <TweetMeeting />
          Use the tags #iamfreeCodeCamp, #freeCodeCamp and the handlers
          @freeCodeCamp and @iamfreecodecamp
        </div>
      </TextBlock>
    </div>
  )
}

export default Challenges
