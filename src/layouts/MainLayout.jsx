import Footer from '../components/Footer';
import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Navigation />
        <Outlet />
        <Footer />
    </>
  )
}

export default MainLayout