import React, { useRef } from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];
const Gallery = () => {
  const scrollRef = useRef();
  const handleClick = (value) => {
    if (value === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "gray" }}>
          Step into the visual journey of Golden Iris, where every dish tells a
          story and every corner exudes elegance.
        </p>
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images-container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images-image">
              <img key={index} src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            size={30}
            onClick={() => handleClick("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            size={30}
            onClick={() => handleClick("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
