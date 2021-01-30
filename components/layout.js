import Header from '../components/header';
import Footer from '../components/footer';

export default function Layout({ children }) {
  return (
    <div className="box-border text-xl sm:text-2xl tracking-tighter">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
