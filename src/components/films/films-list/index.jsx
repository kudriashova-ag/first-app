import React, { useState } from "react";
import films from "../../../data/films";
import FilmCard from "../film-card";
import "./films-list.css";

function FilmsList() {
  const [filmsList, setFilmsList] = useState(films);

  const removeFilmHandler = (id) => {
    setFilmsList(filmsList.filter((item) => item.id !== id));
  };

  return (
    <div className="films">
      {filmsList.map((item) => (
        <FilmCard
          film={item}
          key={item.id}
          removeFilmHandler={removeFilmHandler}
        />
      ))}
    </div>
  );
}

export default FilmsList;
