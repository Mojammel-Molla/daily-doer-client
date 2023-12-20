import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const navLinks = (
    <>
      <li className="mr-3">
        <NavLink>Home</NavLink>
      </li>
      <li className="mr-3">
        {/* // eslint-disable-next-line react/no-unescaped-entities */}
        <NavLink>To Do's</NavLink>
      </li>
      <li className="mr-3">
        <NavLink>Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 border-b-2">
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
        <a className="  text-xl">
          Daily <span>Doer</span>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        <Link to="/login" className="btn">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
