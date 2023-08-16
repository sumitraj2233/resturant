import React from "react";
import { images, data } from "../../constants";
import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className="headtext__cormorant">Today’s Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Chicken Symphony</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((item, index) => (
              <MenuItem
                key={index}
                price={item.price}
                tags={item.tags}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_image">
          <img src={images.menu} alt="menu" />
        </div>
        <div className="app__specialMenu-cocktails_wine flex__center">
          <p className="app__specialMenu_menu_heading">Momos Marvels</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((item, index) => (
              <MenuItem
                key={index}
                price={item.price}
                tags={item.tags}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <button
          type="button"
          style={{ marginTop: "2rem" }}
          className="custom__button"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
