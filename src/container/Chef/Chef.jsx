import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Chef.css";

const Chef = () => (
  <div className="app__chef app__wrapper section__padding app__bg ">
    <div className="app__chef-image ">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__chef-content">
      <SubHeading title="Chef’s Word" />
      <h1 className="headtext__cormorant"> What we believe in</h1>
      <p className="app__chef_para">
        <img src={images.quote} alt="quote" />
        We extend our heartfelt gratitude to our patrons for their unwavering
        support and our passionate team for their dedication to preserving the
        essence of Indian culinary artistry. These accolades are a tribute to
        our collective commitment to excellence.
      </p>
      <h4>Sumit Raj</h4>
      <p className="app__chef_para">Chef & Founder</p>
      <img src={images.sign1} className="app__chef-sign" alt="sign" />
    </div>
  </div>
);

export default Chef;
