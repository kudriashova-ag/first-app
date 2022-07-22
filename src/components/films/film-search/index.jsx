import React from "react";

const FilmSearch = ({ searchText, searchHandler }) => {
  return (
    <div className="container">
      <input type="text" value={searchText} onChange={searchHandler} />
      <p>You search: {searchText}</p>
    </div>
  );
};

export default FilmSearch;
