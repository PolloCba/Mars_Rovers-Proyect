import React from "react";
import stl from "./PhotoSection.module.css";

const PhotoSection = ({ photos }) => {
  return (
    <div className={stl.main_section}>
      {photos.map((el, index) => {
        return (
          <div key={index}>
            <img className={stl.main_photos} src={el.img_src} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default PhotoSection;
