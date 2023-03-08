import React from "react";
import Header from "../../components/Header/Header";
import Suggestion from "../../components/Suggestion/Suggestion";
import Trending from "../../components/Trending/Trending";
import Nav from "../../components/Nav/Nav";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Suggestion />
      <Trending />
      <Nav />
    </div>
  );
};

export default Home;
