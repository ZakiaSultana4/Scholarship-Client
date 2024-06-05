// import { useContext } from 'react'
// import logo from '../assets/images/logo.png'
// import { AuthContext } from '../providers/AuthProvider'
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="navbar  shadow-sm   w-full mx-auto flex  font-medium px-16 mr-10">
      <div className="flex-1">
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="w-[200px]"
            src="https://wpdemo.zcubethemes.com/scholary/wp-content/themes/scholary/inc/assets/images/logo.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 flex  ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-[#004C3F] text-lg "
                  : "  text-lg font-semibold"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/All-Scholarship"
              className={({ isActive }) =>
                isActive
                  ? " text-[#004C3F] text-lg "
                  : "  text-lg font-semibold"
              }
            >
             All Scholarship
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? " text-[#004C3F] text-lg "
                  : "  text-lg font-semibold"
              }
            >
              DashBoard
            </NavLink>
          </li>
         
          {!user && (
            <li>
              <Link
                to="/login"
                className="border-2    bg-[#004C3F] text-white rounded-lg w-[70px] text-center h-10  flex
            items-center justify-center mx-auto"
              >
                Login
              </Link>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div title={user?.displayName} className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 z-[1] p-2 shadow  rounded-box w-52 bg-[rgb(15,29,56)] "
            >
            
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="text-[rgb(15,29,56)] bg-white block text-center  font-semibold"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
