import React, { useState } from "react";
import useFetch from "react-fetch-hook";

const SearchFilms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=cca6466191c181dd939507a79f960a27&query=${searchTerm}`;

  const { isLoading, data } = useFetch(API_URL);

  return (
    <div>
      <h2>Search</h2>
      <input
        type="search"
        onChange={(e) => setSearchTerm(e.target.value)}
        name=""
        id=""
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.results.map((movie) => (
            <li key={movie.id}>
              <p>{movie.title}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="swiper-image"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchFilms;
