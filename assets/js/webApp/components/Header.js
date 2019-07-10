import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id={"header"}>
      <div className={"logo"}> 82 </div>
      <div className={"menu"}>
        <section className={"color-1"}>
          <nav className={"cl-effect-14"}>
            <NavLink to="/"> Home </NavLink>
            <NavLink to="./About"> About </NavLink>
            <NavLink to="./Blog"> Blog </NavLink>
            <NavLink to="./Products">Products</NavLink>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
