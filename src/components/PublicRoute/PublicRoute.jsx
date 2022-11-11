import { Navigate, Outlet } from "react-router-dom";
//Hooks
import { useAuth } from "../../hooks/useAuth";
//Constants
import { links } from "../../constants/routes";

const PublicRoute = () => {
  const isLogin = useAuth();
  if (isLogin) {
    return <Navigate to={links.homePage} />;
  }

  return <Outlet />;
};

export default PublicRoute;
