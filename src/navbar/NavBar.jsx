import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavBar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navLinks = (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? 'text-black underline' : '')}
        to="/"
      >
        <li className="font-medium mr-3">Home</li>
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? 'text-black underline' : '')}
        to=""
      >
        <li className="font-medium mr-3">To Do</li>
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? 'text-white underline' : '')}
        to="/dashboard"
      >
        <li className="mr-3 font-medium">Dashboard</li>
      </NavLink>
    </>
  );
  const handleLogOut = () => {
    logOutUser();
  };
  return (
    <div className="navbar text-white bg-gradient-to-r from-[#0073f0] via-purple-500 to-[#62238c] border-b-2 px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className=" font-bold text-2xl">
          Daily <span>Doer</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn  text-white bg-[#ee9949] hover:bg-[#62238c]"
          >
            Log Out
          </button>
        ) : (
          <Link
            to="/login"
            className="btn  text-white bg-[#ee9949] hover:bg-[#62238c]"
          >
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
