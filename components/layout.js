import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div className=" container flex flex-col h-screen max-w-screen-xl mx-auto text-xl sm:text-2xl px-3 md:px-6 text-gray-800 tracking-tighter">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
