import React from "react";
import Rovers from "../Rovers/Rovers";
import Cameras from "../Cameras/Cameras";
import SolDate from "../SolDate/SolDate";
import EarthDate from "../EarthDate/EarthDate";
import stl from "./MenuSection.module.css";

const MenuSection = ({
  handleInput,
  handleInputDate,
  setRover,
  rover,
  setCamera,
  camera,
  setSol,
  sol,
  setDate,
  date,
  getData,
  getDataDate,
}) => {
  return (
    <div className={stl.page}>
      <div className={stl.menu} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Rovers rover={rover} setRover={setRover} />
      </div>
      <div className={stl.menu} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Cameras camera={camera} setCamera={setCamera} />
      </div>
      <div
        className={stl.menuDate}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <SolDate
          handleInput={handleInput}
          setSol={setSol}
          sol={sol}
          getData={getData}
        />

        <EarthDate
          handleInputDate={handleInputDate}
          setDate={setDate}
          date={date}
          getDataDate={getDataDate}
        />
      </div>
    </div>
  );
};

export default MenuSection;
