import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/";
import AuthPage from "./pages/AuthPage/";
import ReportsPage from "./pages/ReportsPage/";
import NotFoundPage from "./pages/NotFoundPage/";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/reports-page" element={<ReportsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
