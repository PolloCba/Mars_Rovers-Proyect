/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import axios from "axios";
import Navbar from "./components/NavBar/Navbar";
import Paging from "./components/Paging/Paging";
import MenuSection from "./components/MenuSection/MenuSection";
import PhotoSection from "./components/PhotoSection/PhotoSection";
import stl from "./App.module.css";
import moment from "moment/moment";

const App = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [rover, setRover] = useState("");
  const [camera, setCamera] = useState("");
  const [sol, setSol] = useState(null);
  const [date, setDate] = useState(null);
  const [favs, setFavs] = useState({
    fav: [],
  });
  const { fav } = favs;
  const [data, setData] = useState({
    photos: [],
  });
  const { photos } = data;

  //Paging
  const [currentPage, setCurrentPage] = useState(1);
  const [photosPerPage, setPhotosPerPage] = useState(25);
  const indexOfLastPhoto = currentPage * photosPerPage; // =25
  const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage; // =0
  const currentPhotos = photos.slice(indexOfFirstPhoto, indexOfLastPhoto);
  const paging = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //I bring data by rover and date of the sun
  const getData = () => {
    async function getRoverSol() {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=${API_KEY}`
      );
      setData({
        ...data,
        photos: response.data.photos.filter((el) => el.camera.name === camera),
      });
    }
    getRoverSol();
  };

  //I bring data by rover and date of the earth
  const getDataDate = () => {
    async function getRoverDate() {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${date}&api_key=${API_KEY}`
      );
      setData({
        ...data,
        photos: response.data.photos.filter((el) => el.camera.name === camera),
      });
    }
    getRoverDate();
  };

  const currentDate = moment().format("YYYY-MM-DD");

  //I bring the photos of the current date
  const getCurrentDate = () => {
    async function getDate() {
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${currentDate}&api_key=${API_KEY}`
      );
      setData({
        ...data,
        photos: response.data.photos,
      });
    }
    getDate();
  };

  useEffect(() => {
    getCurrentDate();
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    setSol(e.target.value);
  };

  const handleInputDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  const favorites = () => {
    setFavs({
      ...favs,
      favs: fav.push(photos[0]),
    });
    const favorite = JSON.parse(localStorage.getItem("favorites"));
    console.log(favorite, "FAVORITE");
    console.log(photos[0], "PHOTOS");
    if (favorite) {
      if (!favorite.find((e) => e.id === photos[0].id)) {
        localStorage.setItem(
          "favorites",
          JSON.stringify(favorite ? favorite.concat([photos[0]]) : [photos[0]])
        );
      }
    } else {
      localStorage.setItem("favorites", JSON.stringify([photos[0]]));
    }
  };

  const mapFav = JSON.parse(localStorage.getItem("favorites"));

  return (
    <>
      <div id="top" className={stl.top_container}>
        <Navbar />
        <div className={stl.favContainer}>
          <select className={stl.selectFav}>
            <option key="name" value="name">
              Favorites searches...
            </option>
            {mapFav?.map((e) => (
              <option className={stl.optionFav} key={e.id} value={e.id}>
                Rover: {e.rover?.name}&nbsp; Sol Date: {e?.sol}
                &nbsp; Earth Date: {e?.earth_date}&nbsp; Camera:{" "}
                {e.camera?.name}
                &nbsp;
              </option>
            ))}
          </select>
          <button onClick={favorites} className={stl.addButton}>
            Add Search to favorites
          </button>
        </div>
        <MenuSection
          setRover={setRover}
          rover={rover}
          setCamera={setCamera}
          camera={camera}
          setSol={setSol}
          setDate={setDate}
          handleInput={handleInput}
          handleInputDate={handleInputDate}
          sol={sol}
          date={date}
          getData={getData}
          getDataDate={getDataDate}
        />
      </div>
      <div>
        <Paging
          photosPerPage={photosPerPage}
          photos={photos.length}
          paging={paging}
          currentPage={currentPage}
        />
      </div>
      <div id="bottom" className={stl.bottom_container}>
        <PhotoSection photos={currentPhotos} />
        {!photos.length && (
          <p className={stl.noPhotos}>
            There are no photos for the selected camera and date
          </p>
        )}
      </div>
      <div>
        <Paging
          photosPerPage={photosPerPage}
          photos={photos.length}
          paging={paging}
          currentPage={currentPage}
        />
      </div>
      <div className={stl.buttonContainer}>
        <Link to="top" spy={true} smooth={true} offset={0} duration={500}>
          <button className={stl.button}>Back to top</button>
        </Link>
      </div>
    </>
  );
};

export default App;
