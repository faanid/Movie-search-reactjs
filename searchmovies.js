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
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Jurassic Park"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="card" key={movie.id}>
              <img
                className="card--image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " poster"}
              />
              <div className="card--content">
                <h3 className="card--title">{movie.title}</h3>
                <p>
                  <small>RELEASE DATE: {movie.release_date}</small>
                </p>
                <p>
                  <small>RATING: {movie.vote_average}</small>
                </p>
                <p className="card--desc">{movie.overview}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
