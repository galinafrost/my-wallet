import { useSelector } from "react-redux";

export const useAuth = () => {
  const isLogin = useSelector((state) => state.logIn.isLogin);

  return isLogin;
};
