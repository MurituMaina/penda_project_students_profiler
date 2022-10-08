import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = ({ verses }) => {
  return (
    <div>
      <Slide>
        {verses.map((verse, index) => (
          <div className="each-slide" key={index}>
            <div>
              {verse.verse}
              {verse.ref}
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SlideShow;
