import React from "react";

const Searchbar = ({ onSubmit, query, inputChange }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus="on"
          placeholder="Search images and photos"
          value={query}
          onChange={inputChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
