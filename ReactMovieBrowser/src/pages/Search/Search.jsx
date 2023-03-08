import React from "react";
import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import SearchFilms from "../../components/SearchFilms/SearchFilms";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-page">
      <Header />
      <SearchFilms />
      <Nav />
    </div>
  );
};

export default Search;
