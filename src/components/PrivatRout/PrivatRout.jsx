import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivatRout = () => {
  const isLogin = useSelector((state) => state.logIn.isLogin);
  if (!isLogin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivatRout;
