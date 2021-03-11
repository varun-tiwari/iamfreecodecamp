import Card from '../components/card';
import Layout from '../components/layout';

const teamMembers = [
  {
    name: 'Eduardo Vedes',
    location: 'PT',
    image: '/assets/team/eduardo.jpg',
    title: 'Software Developer',
    description: 'Self-taught developer focusing on React, Vue and Node',
    twitter: 'eduardovedes',
    linkedIn: 'evedes'
  },
  {
    name: 'Can Ural',
    location: 'FI',
    image: '/assets/team/can.jpg',
    title: 'Full Stack Developer',
    description: 'Self-taught full stack developer, focusing on React/JS',
    twitter: 'urlDev',
    linkedIn: 'can-ural'
  }
];

export default function Team() {
  console.log('team');
  return (
    <Layout>
      <div className="md:grid grid-cols-2 gap-4 mt-8">
        {teamMembers.map((team) => (
          <Card team={team} key={team.name} />
        ))}
      </div>
    </Layout>
  );
}
