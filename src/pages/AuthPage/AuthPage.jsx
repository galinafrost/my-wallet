import { Link } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <p>Это авторизация</p>
      <Link to="/home-page">Go to home Page</Link>
    </>
  );
};

export default AuthPage;
