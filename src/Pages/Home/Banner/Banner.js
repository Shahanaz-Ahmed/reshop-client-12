import React from "react";
import banner from "../../../assets/images/banner_pic.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[500px]"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold">
              In the end, we'll all become stories..
            </h1>
            <p className="mb-5 text-2xl font-semibold">
              For every book you buy, you should buy the time to read it
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
