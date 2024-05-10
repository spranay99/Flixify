import React from "react";
import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="max-w-[1200px] p-5 mx-auto fixed z-10 xl:left-52 left-0 ">
      <img src={Logo} alt="logo" className="w-32" />
    </header>
  );
};

export default Header;
