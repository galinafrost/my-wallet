import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//Constants
import { links } from "../../constants/routes";
// Component/
import UserMenu from "../../components/UserMenu";

const HomePage = () => {
  const isLogin = useSelector((state) => state.logIn.isLogin);
  return (
    <>
      {isLogin && <UserMenu />}
      <p>Это кабинет пользователя</p>
      <Link to={links.reportsPage}>Reports Page</Link>
    </>
  );
};

export default HomePage;
