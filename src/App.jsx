import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import MenuMobile from "./components/MenuMobile";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <MenuMobile toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Header setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <Main />
    </>
  );
}

export default App;
