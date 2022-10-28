import { Link } from "react-router-dom";

const ReportsPage = () => {
  return (
    <>
      <p>Это страница отчетов</p>
      <Link to="/home-page">Вернуться в кабинет</Link>
    </>
  );
};

export default ReportsPage;
