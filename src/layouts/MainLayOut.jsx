import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

const MainLayOut = () => {
  return (
    <div className="mx-5">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayOut;
