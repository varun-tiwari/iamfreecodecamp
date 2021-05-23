import { Card, Title, TextBlock } from '../../components'
import { mentors } from '../../utils'

const Mentors = () => {
  return (
    <div id="mentors">
      <Title>Mentors</Title>
      <TextBlock className="flex flex-col gap-6">
        {mentors.map(mentor => (
          <Card person={mentor} key={mentor.name} />
        ))}
      </TextBlock>
    </div>
  )
}

export default Mentors
