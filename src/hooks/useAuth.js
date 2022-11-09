import { useSelector } from "react-redux";

// import { isLogin } from "../../redux/auth/auth-selectors";

export const useAuth = () => {
  const isLogin = useSelector((state) => state.logIn.isLogin);

  return isLogin;
};
