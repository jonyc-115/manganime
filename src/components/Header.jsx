import { Link } from "react-router-dom";
import BtnMenu from "./BtnMenu";

const Header = ({ setToggleMenu, toggleMenu }) => {
  return (
    <header className="sticky top-0 h-[5rem] z-[100] bg-[#fdfdfd]">
      <div className="container h-full max-w-screen-xl mx-auto px-2 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link onClick={() => setToggleMenu(false)} to="/">
            <span className="text-[#a72323]">Mang</span>
            <span className="text-[#2a6494]">Anime</span>
          </Link>
        </h1>
        <BtnMenu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
        <nav className="sm:hidden">
          <Link to="/">Inicio</Link>
          <div>Categorias</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
