import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import BookCategories from "../BookCategories/BookCategories";

const Home = () => {
  return (
    <div className="mx-6">
      <Banner></Banner>
      <BookCategories></BookCategories>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
