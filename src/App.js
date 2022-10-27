import HomePage from "./pages/HomePage/";
import NotFoundPage from "./pages/NotFoundPage/";
import MainPage from "./pages/MainPage/";
import ReportsPage from "./pages/ReportsPage/";

function App() {
  return (
    <div className="App">
      <HomePage />
      <MainPage />
      <ReportsPage />
      <NotFoundPage />
    </div>
  );
}

export default App;
