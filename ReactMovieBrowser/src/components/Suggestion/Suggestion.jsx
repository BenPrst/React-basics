import React, { useState, useEffect } from "react";
import "./Suggestion.scss";
import useFetch from "react-fetch-hook";

const Suggestion = () => {
  const API_KEY = "cca6466191c181dd939507a79f960a27"; // Replace with your TMDb API key
  const [trailerKey, setTrailerKey] = useState("");
  const { isLoading, data } = useFetch(
    `https://api.themoviedb.org/3/movie/333339?api_key=${API_KEY}`
  );

  useEffect(() => {
    const getMovieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${data.id}/videos?api_key=${API_KEY}`
        );
        const trailerData = await response.json();
        const trailers = trailerData.results.filter(
          (result) => result.type === "Trailer"
        );
        if (trailers.length > 0) {
          setTrailerKey(trailers[0].key);
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (data) {
      getMovieTrailer();
    }
  }, [data, API_KEY]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="suggestion">
          {trailerKey ? (
            <iframe
              title="Movie Trailer"
              src={`https://www.youtube.com/embed/${trailerKey}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt=""
            />
          )}
        </div>
      )}
    </>
  );
};

export default Suggestion;
