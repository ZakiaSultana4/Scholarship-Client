import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div>
      {/* Navbar */}

      <Navbar />
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)]">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Main;
