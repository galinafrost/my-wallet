import { Link } from "react-router-dom";

//Constants
import { links } from "../../constants/routes";

const NotFoundPage = () => {
  return (
    <>
      <h3>Not found page</h3>
      <Link to={links.authPage}>Go Home</Link>
    </>
  );
};

export default NotFoundPage;
