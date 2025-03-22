import React from "react";
import code from "../constants/code";
import "../styles/header/style.css";
import logo from "../images/icon_logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header-menu">
        <div className="header-menu_left"><img src={logo} alt="ƒƒS"/></div>
        <ul className="header-menu_right">
          <li className="header-menu_rightContent"><a href="#top">TOP</a></li>
          <li className="header-menu_rightContent"><a href="#about">ABOUT</a></li>
          <li className="header-menu_rightContent"><a href="#works">WORKS</a></li>
          <li className="header-menu_rightContent"><a href="#contact">CONTACT</a></li>
          <li className="header-menu_rightContent"><a href={code.urls.signavi} target="_blank">BLOG</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
