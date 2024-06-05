import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import Loader from "../components/Shared/Loader";

const ModeratorRoute = ({children}) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loader />;
  if (role === "moderator") return children;
  return <Navigate to="/dashboard" />;
};

export default ModeratorRoute;
