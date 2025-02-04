import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar className="mb-5" />
      <main className="flex-1" style={{ marginTop: "120px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;