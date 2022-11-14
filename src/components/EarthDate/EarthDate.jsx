import React from "react";
import { Link } from "react-scroll";
import stl from "./EarthDate.module.css";

const EarthDate = ({ handleInputDate, setDate, date, getDataDate }) => {
  return (
    <ul className={stl.date_nav}>
      <h2 className={stl.h2date}>Select a Date</h2>
      <div className={stl.submit}>
        <input
          onChange={handleInputDate}
          className={stl.date}
          type="date"
          placeholder="Enter a Date"
        ></input>
        <button onClick={() => setDate(date)} className={stl.explore_button}>
          <Link
            to={"bottom"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={getDataDate}
          >
            View Photos
          </Link>
        </button>
      </div>
    </ul>
  );
};

export default EarthDate;
