import React from "react";

import "./Header.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => {
  return (
    <div className="app__header section__padding app__wrapper" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new Flavour" />
        <h1 className="app__header-h1">The key to Fine dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0", color: "gray" }}>
          Namaste and Welcome to Golden Iris – A Celebration of Authentic Indian
          Cuisine Embark on a culinary voyage that encapsulates the rich
          tapestry of Indian flavors and traditions.
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>
      <div className="app__header-image app__wrapper_img">
        <img src={images.welcome} alt="home" />
      </div>
    </div>
  );
};

export default Header;
