import Card from '../components/card';
import Layout from '../components/layout';

const mentors = [
  {
    name: 'Eduardo Vedes',
    location: 'PT',
    image: '/assets/team/eduardo.jpg',
    title: 'Software Developer',
    description: 'Self-taught developer focusing on React, Vue and Node'
  },
  {
    name: 'Can Ural',
    location: 'FI',
    image: '/assets/team/can.jpg',
    title: 'Full Stack Developer',
    description: 'Self-taught full stack developer, focusing on React/JS'
  }
];

export default function Mentors() {
  console.log('mentors');
  return (
    <Layout>
      <div className="md:grid grid-cols-2 gap-4 mt-8">
        {mentors.map((mentor) => (
          <Card team={mentor} key={mentor.name} />
        ))}
      </div>
    </Layout>
  );
}
