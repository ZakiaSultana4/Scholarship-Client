/* eslint-disable react/prop-types */
import { Bars } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return (
      <div className=" flex justify-center items-center  my-40 flex-col">
        <img
          className="w-[200px]"
          src="https://wpdemo.zcubethemes.com/scholary/wp-content/themes/scholary/inc/assets/images/logo.png"
          alt=""
        />

        <Bars
          height="80"
          width="80"
          color="#004C3F"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
  
      </div>
    );
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace="true" />;
};

export default PrivateRoute;
