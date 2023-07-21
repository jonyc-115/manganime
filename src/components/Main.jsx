import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import SeriePage from "../pages/SeriePage.jsx";
import Categories from "./Categories.jsx";

const Main = () => {
  return (
    <main className="reltive py-4">
      <div className="container max-w-screen-xl mx-auto px-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/serie/:id" element={<SeriePage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
