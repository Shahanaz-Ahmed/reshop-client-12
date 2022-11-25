import React from "react";
import { Link } from "react-router-dom";

const AvailableCategories = ({ categories }) => {
  const { id, name } = categories;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body mt-6">
        <Link>
          <h2 className=" text-3xl font-bold italic font-serif text-center mb-5">
            {name}
          </h2>
        </Link>
        <p className="text-center text-2xl ">
          to get the book of this category,click on it
        </p>
        <div className="card-actions justify-center">
          {/* <button className="btn btn-primary">Book Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default AvailableCategories;
