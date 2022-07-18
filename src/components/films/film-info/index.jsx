import React from 'react';

const FilmInfo = ({ film }) => {
  return (
    <div>
      <h3>{film.director}</h3>
      <p>{film.description}</p>
    </div>
  );
}

export default FilmInfo;
