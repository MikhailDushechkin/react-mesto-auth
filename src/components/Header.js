import React from "react";
import logo from '../images/logo-white.svg'

function Header() {
  return (
    <>
    <heagder className="header">
      <img
        src={logo}
        alt="Логотип 'Место'"
        className="header__logo"
      />
    </heagder>
    </>
  );
}

export default Header;
