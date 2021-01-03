import React, { useState } from "react";

// Components
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const Nav = () => {
  // State hooks
  const [menuOpen, setMenuOpen] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <Menu
      isOpen={menuOpen}
      right={true}
      onStateChange={(state) => handleStateChange(state)}
    >
      <Link id="home" className="menu-item" to="/" onClick={() => closeMenu()}>
        Home
      </Link>
      <Link
        id="spinni"
        className="menu-item"
        to="/spinni"
        onClick={() => closeMenu()}
      >
        Spinni
      </Link>
      <Link
        id="contact"
        className="menu-item"
        to="/contact"
        onClick={() => closeMenu()}
      >
        Contact
      </Link>
    </Menu>
  );
};
export default Nav;
