import CardList from '../components/card-list';
import Layout from '../components/layout';
import mentors from '../utils/team-members';

export default function Mentors() {
  return (
    <Layout>
      <CardList members={mentors} />
    </Layout>
  );
}
