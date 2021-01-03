import React, { useState } from "react";
import { useSelector } from "react-redux";

// Assets
import JRlogo from "../assets/images/JRlogo-min.png";

const Header = () => {
  // State hooks

  // Reducers
  const blurStatus = useSelector((state) => state.style.blur);

  return (
    <header className={"header fade-in " + (!!blurStatus ? "blur " : "")}>
      <img className="header__logo" src={JRlogo} alt={"JRGraphics.fi"} />
    </header>
  );
};
export default Header;
