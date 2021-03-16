import Card from '../components/card';

export default function CardList({ members }) {
  return (
    <div className="lg:grid grid-cols-2 gap-4 mt-8">
      {members.map(mentor => (
        <Card person={mentor} key={mentor.name} />
      ))}
    </div>
  );
}
