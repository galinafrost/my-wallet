import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import UserMenu from "../../components/UserMenu";

const HomePage = () => {
  const isLogin = useSelector((state) => state.logIn.isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate("/", { replace: true });
    }
  });
  return (
    <>
      {isLogin && <UserMenu />}
      <p>Это кабинет пользователя</p>
      <Link to="/reports-page">Reports Page</Link>
    </>
  );
};

export default HomePage;
