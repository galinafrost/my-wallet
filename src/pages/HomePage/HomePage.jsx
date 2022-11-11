import { Link } from "react-router-dom";

//Constants
import { links } from "../../constants/routes";
// Component/
import UserMenu from "../../components/UserMenu";

const HomePage = () => {
  return (
    <>
      <UserMenu />
      <p>Это кабинет пользователя</p>
      <Link to={links.reportsPage}>Reports Page</Link>
    </>
  );
};

export default HomePage;
