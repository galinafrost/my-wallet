import { Routes, Route } from "react-router-dom";

import { links } from "./constants/routes";
//Components
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ReportsPage from "./pages/ReportsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path={links.authPage} element={<AuthPage />} />
        <Route path={links.homePage} element={<HomePage />} />
        <Route path={links.reportsPage} element={<ReportsPage />} />
        <Route path={links.notFoundPage} element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
