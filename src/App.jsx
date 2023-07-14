import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <Header setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      <Main toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </>
  );
}

export default App;
