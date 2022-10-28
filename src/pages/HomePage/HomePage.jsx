import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <p>Это кабинет пользователя</p>
      <Link to="/reports-page">Reports Page</Link>
    </>
  );
};

export default HomePage;
