import React, {useContext, useState} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const [resumeVisible, toggleResumeVisibility] = useState(false);
  const {isDark} = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  function handleClick() {
    toggleResumeVisibility(!resumeVisible);
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text={resumeVisible ? "Toggle" : "Resume"}
                  onClick={handleClick}
                />
              </div>
              <div className={`frame ${resumeVisible ? 'fadeIn' : 'fadeOut'}`}>
                <iframe className={`${resumeVisible ? 'responsive-frame' : 'hidden-frame'}`} src="https://drive.google.com/file/d/1p7pk15A7wPEsmRWKRx9ugfNH0qDPFtMK/preview" allow="autoplay" title="Resume"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
