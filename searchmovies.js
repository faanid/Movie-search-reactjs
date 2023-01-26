import React from "react";

export default function SearchMovies() {
  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
      />
      <button class="button" type="submit">
        Search
      </button>
    </form>
  );
}
