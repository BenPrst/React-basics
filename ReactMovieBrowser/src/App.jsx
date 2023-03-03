import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Suggestion from "./components/Suggestion/Suggestion";
import Trending from "./components/Trending/Trending";

const App = () => {
  return (
    <div>
      <Header />
      <Suggestion />
      <Trending />
    </div>
  );
};

export default App;
