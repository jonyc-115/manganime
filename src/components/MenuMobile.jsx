import FormSearch from "./FormSearch";
import { Link } from "react-router-dom";

const MenuMobile = ({ toggleMenu, setToggleMenu }) => {
  let toggleWidth = toggleMenu ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div
      className={` transition-all ${toggleWidth} left-0 fixed top-[5rem] h-screen w-full bg-[#00000070] z-[100]`}
    >
      <div className="py-5 px-3 block w-3/4 bg-[#222] h-full ">
        <div className="w-full">
          <FormSearch />
          <Link
            onClick={() => setToggleMenu(false)}
            className="flex text-white mt-4"
            to="categories"
          >
            Categories
          </Link>
          <Link
            className="flex text-white mt-2"
            to="/"
            onClick={() => setToggleMenu(false)}
          >
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
