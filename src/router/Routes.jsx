import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/MainLayOut';
import Home from '../pages/home/Home';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayOut />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },
]);

export default Routes;
