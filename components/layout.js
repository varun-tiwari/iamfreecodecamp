import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto text-blue-800">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
