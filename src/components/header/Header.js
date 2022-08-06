import React, {useContext} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <header className={isDark ? "dark-menu header" : "header"}>
      <a href="/" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <ToggleSwitch />
    </header>
  );
}
export default Header;
