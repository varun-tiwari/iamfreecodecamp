import Card from '../Card'

const CardList = ({ members }) => {
  return (
    <div className="flex flex-col gap-4">
      {members.map(mentor => (
        <Card person={mentor} key={mentor.name} />
      ))}
    </div>
  )
}

export default CardList
