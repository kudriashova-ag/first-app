import React, { useState } from "react";
import FilmInfo from "../film-info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./card.css";

function FilmCard({ film, removeFilmHandler }) {
  const showAlert = (msg) => alert(msg);
  const [showInfo, setShowInfo] = useState(false);

  const buttonHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="film" id={film.id}>
      <img src={film.image} alt={film.name} />
      <h3>{film.name}</h3>
      <div>Year: {film.year}</div>
      <button
        onClick={() => {
          showAlert(film.name);
        }}
      >
        Show alert
      </button>

      <button onClick={buttonHandler}>
        Show info{" "}
        {showInfo ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </button>

      <button className="danger" onClick={() => removeFilmHandler(film.id)}>
        Delete
      </button>

      {showInfo && <FilmInfo film={film} />}
    </div>
  );
}

export default FilmCard;
