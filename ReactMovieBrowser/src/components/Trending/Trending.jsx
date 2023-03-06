import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Trending.scss";
import "swiper/css";
import "swiper/css/pagination";
import useFetch from "react-fetch-hook";

import { EffectCoverflow, Pagination } from "swiper";

const Trending = () => {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=cca6466191c181dd939507a79f960a27";
  const { isLoading, data } = useFetch(API_URL);

  return (
    <div>
      <h2>Trendings</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data.results.map((movie) => (
            <SwiperSlide className="swiper-slide" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                className="swiper-image"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Trending;
