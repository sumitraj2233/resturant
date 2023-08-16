import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="gimage" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          At Golden Iris, we blend the art of Indian cooking with a contemporary
          twist, creating a symphony of tastes that pay homage to our
          heritage.Book your table now and prepare to be enchanted by the magic
          of Golden Iris.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Today, under the skillful guidance of Sumit Raj, Golden Iris continues
          to flourish as a beacon of Indian gastronomy. It remains a testament
          to the Raj family's unwavering passion for sharing India's culinary
          artistry with the world.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
