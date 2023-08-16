import React, { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

import "./Intro.css";

const Intro = () => {
  const vidRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  const handleClick = () => {
    setPlayVideo((prevState) => !prevState);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__intro">
      {/* <div className="app__intro-overlay"> */}
      <video
        src={meal}
        controls={false}
        ref={vidRef}
        muted
        type="video/mp4"
        loop
      />
      {/* </div> */}
      <div className="app__intro-controls " onClick={handleClick}>
        <div className="app__video-overlay_circle">
          {playVideo ? (
            <BsPauseFill color="white" size={40} />
          ) : (
            <BsFillPlayFill color="white" size={40} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
