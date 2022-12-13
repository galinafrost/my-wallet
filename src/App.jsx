import { Routes, Route } from "react-router-dom";
//Constants
import { links } from "./constants/routes";
//Components
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import ReportsPage from "./pages/ReportsPage";
import NotFoundPage from "./pages/NotFoundPage";
import PageLayout from "./layout/PageLayout/PageLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route element={<PublicRoute />}>
            <Route path={links.authPage} element={<AuthPage />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path={links.homePage} element={<HomePage />} />
            <Route path={links.reportsPage} element={<ReportsPage />} />
          </Route>
          <Route path={links.notFoundPage} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
