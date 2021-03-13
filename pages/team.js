import CardList from '../components/card-list';
import Layout from '../components/layout';
import teamMembers from '../utils/team-members';

export default function Team() {
  return (
    <Layout>
      <CardList members={teamMembers} />
    </Layout>
  );
}
