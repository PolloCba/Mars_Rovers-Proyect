import React from "react";
import { rovers } from "../../data/rovers";
import stl from "./Rovers.module.css";
import Curiosity_rover from "../../assets/Curiosity_rover.jpg";
import Opportunity_rover from "../../assets/Opportunity_rover.jpg";
import Spirit_rover from "../../assets/Spirit_rover.jpg";

const images = {
  Curiosity: Curiosity_rover,
  Opportunity: Opportunity_rover,
  Spirit: Spirit_rover,
};

const Rovers = ({ setRover, rover }) => {
  return (
    <ul className={stl.rover_nav}>
      <h2>Choose a rover</h2>
      {rovers.map((r, index) => (
        <li
          className={rover === r.link ? stl.selected : stl.rover}
          tabIndex="1"
          key={index}
          onClick={() => setRover(r.link)}
        >
          {r.name}
          <br></br>
          <img className={stl.image} src={images[r.name]} alt="Rover Photos" />
        </li>
      ))}
    </ul>
  );
};

export default Rovers;
