import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
     <Navbar className="sticky top-0 z-50" />
      <main className="flex-1 pt-[60px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;