import { Link } from "react-router-dom";
//Constants
import { links } from "../../constants/routes";

const ReportsPage = () => {
  return (
    <>
      <p>Это страница отчетов</p>
      <Link to={links.homePage}>Вернуться в кабинет</Link>
    </>
  );
};

export default ReportsPage;
