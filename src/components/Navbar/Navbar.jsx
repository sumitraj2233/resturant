import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineResturantMenu } from "react-icons/md";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1
          className="p__opensans"
          style={{
            color: "white",
            fontSize: "20px",
            fontFamily: "Cormorant Upright",
          }}
        >
          GOLDEN IRIS
        </h1>
        {/* <img src={images.irislogo} alt="logo" /> */}
      </div>
      <ul className="app_navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log in / registration
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        {!toggle && (
          <GiHamburgerMenu
            color="white"
            fontSize={27}
            onClick={() => setToggle(true)}
          />
        )}
        {toggle && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              className="overlay_close"
              fontSize={27}
              onClick={() => setToggle(false)}
            />
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">About</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">Awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
