import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import Footer from '../footer/Footer';

const MainLayOut = () => {
  return (
    <div className="">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
