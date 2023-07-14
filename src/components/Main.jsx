import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import SeriePage from "../pages/SeriePage.jsx";
import FormSearch from "./FormSearch.jsx";
import Categories from "./Categories.jsx";

const Main = ({ toggleMenu }) => {
  let toggleWidth = toggleMenu ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <main className="reltive py-4">
      <div
        className={` transition-all ${toggleWidth} left-0 fixed top-[5rem] h-screen w-full bg-[#00000070] z-[100]`}
      >
        <div className="py-5 block w-3/4 bg-[#222] h-full ">
          <FormSearch />
          <Categories />
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto px-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/serie/:id" element={<SeriePage />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;