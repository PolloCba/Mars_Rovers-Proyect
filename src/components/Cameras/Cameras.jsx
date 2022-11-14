import React from "react";
import { cameras } from "../../data/cameras";
import stl from "./Cameras.module.css";

const Cameras = ({ setCamera, camera }) => {
  return (
    <div>
      <ul className={stl.camera_nav}>
        <h2>Choose a camera</h2>
        {cameras.map((c, index) => (
          <li
            className={camera === c.link ? stl.selected : stl.camera}
            tabIndex="1"
            key={index}
            onClick={() => setCamera(c.link)}
          >
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cameras;
