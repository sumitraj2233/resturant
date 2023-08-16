import React from "react";

import "./Footer.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => (
  <div className="app__footer app__wrapper">
    <div className="app__footer-bg"></div>
    <div className="app__bg app__footer-lg section__padding">
      <div className="app_footer-subscribe">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe to Our Newsletter</h1>
        <p className="p__cormorant" style={{ margin: "2rem 0" }}>
          And never miss latest Updates!
        </p>
        <div className="app__footer-input">
          <input type="text" placeholder="Email Address" />
          <button type="button" className="custom__button">
            Subscribe
          </button>
        </div>
      </div>
      <div className="app__footer-logo">
        <div className="app__footer-logo-contact">
          <h4 className="p__cormorant">Contact Us</h4>
          <p className="p__cormorant">
            Pulpar, BiharSharif, Near Canara Bank, Bihar, Nalanda
          </p>
          <p className="p__cormorant">+ 91 9910475193 +91 9693511870 </p>
        </div>
        <div className="app__footer-logo-mid">
          <h1 className="headtext__cormorant">Golden Iris</h1>
          <p className="p__cormorant">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </p>
          <img src={images.spoon} alt="spoon" />
          {/* <img src={images.} alt="" /> */}
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
          <p className="p__cormorant">2023 SUMIT All Rights reserved.</p>
        </div>
        <div className="app__footer-logo-work">
          <h4 className="p__cormorant">Working Hours</h4>
          <p className="p__cormorant">Monday-Friday: 08:00 am -12:00 am</p>
          <p className="p__cormorant">Saturday-Sunday: 07:00am -11:00 pm</p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
