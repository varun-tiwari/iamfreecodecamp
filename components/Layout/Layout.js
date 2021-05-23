import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className="container flex flex-col h-screen max-w-screen-lg mx-auto sm:text-lg px-3 md:px-6 text-gray-800 tracking-tighter">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
