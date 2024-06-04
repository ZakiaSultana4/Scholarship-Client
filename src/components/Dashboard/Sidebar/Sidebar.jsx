import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import StudentMenu from "../Menu/StudentMenu";
import MenuItem from "./MenuItem";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { Link } from "react-router-dom";
import ModeratorMenu from "../Menu/ModeratorMenu";
import AdminMenu from "../Menu/AdminMenu";

const Sidebar = () => {
  const [role] = useRole();
  const { logOut } = useAuth();
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="w-[200px]"
            src="https://wpdemo.zcubethemes.com/scholary/wp-content/themes/scholary/inc/assets/images/logo.png"
            alt=""
          />
        </Link>
      </div>

      {/* Sidebar */}
      <div>
        <div>
          <div>
            <div
              className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center
             bg-[#a7d8cf] mx-auto mt-6"
            >
              <Link to="/" className="flex gap-2 items-center">
                <img
                  className="w-[100px]"
                  src="https://wpdemo.zcubethemes.com/scholary/wp-content/themes/scholary/inc/assets/images/logo.png"
                  alt=""
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                {role === "user" && <StudentMenu />}
                {role === "moderator" && <ModeratorMenu/>}
                {role === "admin" && <AdminMenu/>}
            </nav>
          </div>
        </div>

        <div>
          <MenuItem icon={FcSettings} label="Profile" address="/dashboard" />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
