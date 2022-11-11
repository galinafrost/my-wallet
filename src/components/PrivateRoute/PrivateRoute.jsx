import { Navigate, Outlet } from "react-router-dom";
//Hooks
import { useAuth } from "../../hooks/useAuth";
//Constants
import { links } from "../../constants/routes";

const PrivateRoute = () => {
  const isLogin = useAuth();
  if (!isLogin) {
    return <Navigate to={links.authPage} />;
  }

  return <Outlet />;
};

export default PrivateRoute;
