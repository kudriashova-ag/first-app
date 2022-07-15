import React from "react";
import films from "../../../data/films";
import "./films-list.css";

function FilmsList() {
  return (
    <div className="films">
      {films.map((film) => (
        <div>
          <img src={film.image} alt="" />
          <h3>{film.name}</h3>
          <div>Year: {film.year}</div>
        </div>
      ))}
    </div>
  );
}

export default FilmsList;
