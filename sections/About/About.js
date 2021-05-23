import { TextBlock, Title } from '../../components'

const About = () => {
  return (
    <div id="about">
      <Title>About</Title>
      <TextBlock>
        When we started this quest, in February 2021, we&apos;ve presented it as
        a triple challenge in the form of:{' '}
        <span className="font-bold">&quot;Donate, mentor and meet&quot;</span>.
      </TextBlock>
      <TextBlock>
        <div>
          As time passed by we&apos;ve started to put more emphasis on
          mentoring, as it&apos;s our{' '}
          <span className="font-bold">best outcome</span>.
        </div>
        <div>
          If you&apos;re curious about our story, here&apos;s the
          <a
            className="underline hover:no-underline px-2 font-bold"
            href="https://blog.eduardovedes.com/introducing-iamfreecodecamp-a-movement-to-raise-awareness-for-the-open-source-community"
            target="_blank"
            rel="noreferrer noopener">
            blog post
          </a>
          that originated this idea.
        </div>
      </TextBlock>
      <TextBlock>
        <div>
          In spite of that we still incentive you to &nbsp;
          <a
            className="font-bold underline"
            href="https://www.freecodecamp.org/donate/"
            rel="noopener noreferrer"
            target="_blank">
            donate
          </a>
          &nbsp; to freeCodeCamp non-profit or to get to know one another! We
          just want you to have FUN and mingle around with the community!!!
        </div>
      </TextBlock>
      <TextBlock>
        <a
          className="underline hover:no-underline font-bold"
          href="https://twitter.com/ossia"
          rel="noopener noreferrer"
          target="_blank">
          Quincy
        </a>
        &nbsp; and the freeCodeCamp team, surrounded by all freeCodeCamp&apos;s
        amazing community have been doing a great job about raising donations!
      </TextBlock>
      <TextBlock>
        <span className="font-bold">freeCodeCamp</span> is building a Data
        Science Curriculum with Advanced Mathematics and Machine Learning. Check
        the article &nbsp;
        <a
          className="font-bold underline hover:no-underline"
          href="https://www.freecodecamp.org/news/building-a-data-science-curriculum-with-advanced-math-and-machine-learning/"
          rel="noopener noreferrer"
          target="_blank">
          here
        </a>
        &nbsp; if you&apos;re interested in knowing more about it!
      </TextBlock>
    </div>
  )
}

export default About
