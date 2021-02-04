import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div className="container mx-auto text-xl sm:text-2xl px-2 sm:px-12 text-gray-800 tracking-tighter">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
