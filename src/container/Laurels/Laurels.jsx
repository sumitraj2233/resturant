import React from "react";

import "./Laurels.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { data } from "../../constants";

const Laurels = () => (
  <div
    className="app__laurels app__bg app__wrapper section__padding"
    id="awards"
  >
    <div className="app__laurels-logo">
      <img src={images.logo} alt="logo" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <div className="app__laurels_awards-card">
            <div className="app__laurels_awards-card-img">
              <img src={award.imgUrl} alt="award" />
            </div>
            <div className="app__laurels_awards-card_content">
              <h4 className="p__cormorant" style={{ color: "#DCCA87" }}>
                {award.title}
              </h4>
              <p className="p__cormorant">{award.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
