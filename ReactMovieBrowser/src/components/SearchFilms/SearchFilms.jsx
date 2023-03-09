import React, { useState } from "react";
import useFetch from "react-fetch-hook";
import "./SearchFilms.scss";

const SearchFilms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=cca6466191c181dd939507a79f960a27&query=${searchTerm}`;

  const { isLoading, data } = useFetch(API_URL);

  return (
    <div className="search-films">
      <input
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        name=""
        id=""
        placeholder="Star Wars"
        className="search-input"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="films-list">
          {data.results.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p className="films-title">
                <b>{movie.title}</b>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilms;
