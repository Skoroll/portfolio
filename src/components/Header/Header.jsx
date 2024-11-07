import React from "react";
import { Link } from "react-router-dom";
import "../../styles/main.scss";
import Nav from "./Nav";
import logo from "../../assets/logo.png"
import NightButton from "./NightButton";

function Header() {
  return (
    <header className="header">
      <Link to="/">
      <img src={logo} alt="Logo Y. GICQUEL" className="header__img" />
      </Link>
      <div className="header__menu">
        <Nav />
        <NightButton />
      </div>
    </header>
  );
}

export default Header;
