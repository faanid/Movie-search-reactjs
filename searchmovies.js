import React, { useState } from "react";

export default function SearchMovies() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();
    // console.log("submitting");

    const query = "Jurassic Park";

    const url = `https://api.themoviedb.org/3/search/movie?api
  _key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=
  ${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json;
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        className="input"
        type="text"
        name="query"
        placeholder="i.e. Jurassic Park"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}
