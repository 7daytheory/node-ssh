import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const MainLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  }

export default MainLayout