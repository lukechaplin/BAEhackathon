import React from 'react';
import css from "../SearchBar/SearchBar.module.css"

function SearchBar({ getWord, submitInfo }) {
	return (
    <form onSubmit={submitInfo}>
      <input
        type="text"
        placeholder="Search for a plant..."
        onChange={getWord}
        className={css.searchContainer}
      />
      <input type="submit" className={css.searchButton} value="search"/>
    </form>
  );
}
export default SearchBar;
