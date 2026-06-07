import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import EntitiesPage from "../pages/EntitiesPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/entities" element={<EntitiesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;