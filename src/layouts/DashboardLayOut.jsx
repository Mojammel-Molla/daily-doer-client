import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayOut = () => {
  return (
    <div className="mx-5 flex ">
      <div className="w-2/12 bg-[#0073f0] mt-5 min-h-screen">
        <ul className="p-5">
          <li className="mr-3 btn-active">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-3">
            <NavLink>Profile</NavLink>
          </li>
          <li className="mr-3">
            <NavLink to="/dashboard/todo-list">To Do List</NavLink>
          </li>
          <li className="mr-3">
            <NavLink to="/dashboard/create-task">Create Task</NavLink>
          </li>
        </ul>
      </div>
      <div className="w-10/12 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayOut;
