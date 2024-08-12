import React, { useState } from "react";
import "../MainNavbar Page/MainNavbar.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const MainNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div id="MainNavbarPage_main_body">
      <nav id="Mainnavbarpage_nav">
        <div>
        <h3 id="mainnavbarpage-heading1">
          Get 10% off on your first purchase. Use code FIRST10 at checkout{" "}
        </h3>
        </div>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="list-menu">
        <ul className={menuOpen ? "open" : ""}>
          <li id="mainnavbarpage_li">
            <NavLink to="/contactus" id="mainnavbarpage_navlink">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutus" id="mainnavbarpage_navlink">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink id="mainnavbarpage_navlink">KidzTryz App Download</NavLink>
          </li>
          <li>
          <NavLink to='/help' id="mainnavbarpage_navlink">Help</NavLink>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
};
