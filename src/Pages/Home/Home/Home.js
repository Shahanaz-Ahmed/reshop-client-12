import React from "react";
import Banner from "../Banner/Banner";
import BookCategories from "../BookCategories/BookCategories";

const Home = () => {
  return (
    <div className="mx-6">
      <Banner></Banner>
      <BookCategories></BookCategories>
    </div>
  );
};

export default Home;
