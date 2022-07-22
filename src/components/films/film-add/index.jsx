import React, { useState } from "react";
import styles from "./filmAdd.module.scss";

const FilmAdd = ({ addFilm }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const changeNameHandler = ({ target: { value } }) => {
    setName(value);
  };

  const changeYearHandler = ({ target: { value } }) => {
    setYear(value);
  };

  const changeImageHandler = ({ target: { value } }) => {
    setImage(value);
  };

  const saveFilm = (e) => {
    e.preventDefault();
    addFilm({ name, year, image });
    setName("");
    setYear("");
    setImage("");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={saveFilm}>
        <div className={styles.form_input}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={name}
            onChange={changeNameHandler}
            id="name"
          />
        </div>
        <div className={styles.form_input}>
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            value={year}
            onChange={changeYearHandler}
            id="year"
          />
        </div>
        <div className={styles.form_input}>
          <label htmlFor="image">Image:</label>
          <input
            type="text"
            value={image}
            onChange={changeImageHandler}
            id="image"
          />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};

export default FilmAdd;
