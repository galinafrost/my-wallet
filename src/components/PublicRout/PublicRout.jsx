import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRout = () => {
  const isLogin = useSelector((state) => state.logIn.isLogin);
  if (isLogin) {
    return <Navigate to="/home-page" />;
  }

  return <Outlet />;
};

export default PublicRout;
