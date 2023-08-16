import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "2rem" }}>
        Find Us
      </h1>
      <p
        className="p__cormorant"
        style={{ color: "#AAAAAA", marginBottom: "1rem" }}
      >
        Pulpar, BiharSharif, Near Canara Bank, Bihar, Nalanda, 803101
      </p>
      <h4
        className="p__cormorant"
        style={{ color: "#DCCA87", marginBottom: "1rem" }}
      >
        Opening Hours
      </h4>
      <p className="p__cormorant" style={{ marginBottom: "0.5rem" }}>
        Mon - Fri: 10:00 am - 02:00 am
      </p>
      <p className="p__cormorant">Sat - Sun: 10:00 am - 03:00 am</p>
      <button
        type="button"
        className="custom__button"
        style={{ marginTop: "2.2rem" }}
      >
        Visit us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
