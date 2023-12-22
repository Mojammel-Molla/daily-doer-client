import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../layouts/MainLayOut';
import Home from '../pages/home/Home';
import LogIn from '../pages/log-in/LogIn';
import Register from '../pages/register/Register';
import DashboardLayOut from '../layouts/DashboardLayOut';
import CreateTask from '../dashboard/create-task/CreateTask';
import TodoList from '../dashboard/todo-list/TodoList';
import PrivateRoute from './PrivateRoute';

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
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
        <DashboardLayOut />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'create-task',
        element: (
          <PrivateRoute>
            <CreateTask />
          </PrivateRoute>
        ),
      },
      {
        path: 'todo-list',
        element: (
          <PrivateRoute>
            <TodoList />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
