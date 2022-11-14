import React from "react";
import { Link } from "react-scroll";
import stl from "./SolDate.module.css";

const SolDate = ({ handleInput, setSol, sol, getData }) => {
  return (
    <ul className={stl.sol_nav}>
      <h2 className={stl.h2sol}>Select a sol</h2>
      <div className={stl.submit}>
        <input
          onChange={handleInput}
          className={stl.sol}
          type="number"
          placeholder="Mars day"
        ></input>
        <button onClick={() => setSol(sol)} className={stl.explore_button}>
          <Link
            to={"bottom"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={getData}
          >
            View Photos
          </Link>
        </button>
      </div>
    </ul>
  );
};

export default SolDate;
