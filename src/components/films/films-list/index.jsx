import React, { useState } from "react";
import films from "../../../data/films";
import FilmAdd from "../film-add";
import FilmCard from "../film-card";
import FilmSearch from "../film-search";
import { v4 as uuidv4 } from "uuid";
import "./films-list.css";

function FilmsList() {
  const [filmsList, setFilmsList] = useState(films);
  const [searchText, setSearchText] = useState("");

  const removeFilmHandler = (id) => {
    setFilmsList(filmsList.filter((item) => item.id !== id));
  };

  const searchHandler = ({ target: { value } }) => {
    setSearchText(value);
    // const newFilms = filmsList.filter((film) => film.name.startsWith(value));
    // const newFilms = films.filter((film) =>
    //   new RegExp("^" + value, "i").test(film.name)
    // );
    setFilmsList(
      films.filter((film) => new RegExp("^" + value, "i").test(film.name))
    );
  };

  const addFilm = ({ name, year, image }) => {
    const newArr = [
      ...filmsList,
      { id: uuidv4(), name: name, year: year, image: image },
    ];

    setFilmsList(newArr);
  };

  return (
    <div>
      <h1>Films</h1>

      <FilmSearch searchText={searchText} searchHandler={searchHandler} />

      <div className="films">
        {filmsList.map((item) => (
          <FilmCard
            film={item}
            key={item.id}
            removeFilmHandler={removeFilmHandler}
          />
        ))}
      </div>

      <FilmAdd addFilm={addFilm} />
    </div>
  );
}

export default FilmsList;

// let str = 'Harry potter'
// let value = "pot";
// let reg = /value/i;
// let reg = new RegExp(value, 'i');

// new RegExp(value, "i").test(str);
