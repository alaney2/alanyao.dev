import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";

import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";


const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const darkMode = isDark ? "dark-mode" : null;

  const bgCustom = isDark ? "bg-custom-dark" : "bg-custom-light";

  return (
    <div>
      <div className={`${darkMode} notranslate ${bgCustom}`} translate="no" >
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          <Header />
          <Greeting />
        </StyleProvider>
      </div>
    </div>
  );
};

export default Main;
