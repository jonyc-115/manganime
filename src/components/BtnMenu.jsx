import open from "../assets/open.svg";
import close from "../assets/close.svg";

const BtnMenu = ({ setToggleMenu, toggleMenu }) => {
  let toggleColor = toggleMenu ? "bg-[#df1313]" : " bg-[#5a9103]";

  return (
    <button
      onClick={() => setToggleMenu(!toggleMenu)}
      className={`${toggleColor} p-3 rounded-full`}
    >
      {toggleMenu ? (
        <img src={close} alt="close menu" />
      ) : (
        <img src={open} alt="open menu" />
      )}
    </button>
  );
};

export default BtnMenu;
