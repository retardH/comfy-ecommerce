import Navbar from './navbar.tsx';
import Footer from './footer.tsx';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar.tsx';

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;