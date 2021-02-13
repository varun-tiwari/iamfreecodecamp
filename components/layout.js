import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto text-xl sm:text-2xl px-2 sm:px-4 md:px-6 text-gray-800 tracking-tighter">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
