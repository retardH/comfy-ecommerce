import Header from './header.tsx';
import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;