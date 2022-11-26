import React, { useState } from "react";
import BookingModal from "../BookingModal/BookingModal";

const BooksCard = ({ book, setSelectedBook }) => {
  const {
    _id,
    img,
    name,
    location,
    original_price,
    posted_time,
    resale_price,
    seller_name,
    years_of_use,
  } = book;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure className="h-[500px]">
          <img src={img} alt="book" />
        </figure>
        <div className="card-body mx-6">
          <h2 className="font-bold font-serif italic text-2xl ">{name}</h2>
          <p className="text-xl font-semibold">Location: {location}</p>
          <p className="text-xl font-semibold">Resale Price: {resale_price}</p>
          <p className="text-xl font-semibold">
            Original Price: {original_price}
          </p>
          <p className="text-xl font-semibold">Years Of Use: {years_of_use}</p>
          <p className="text-xl font-semibold">Posted time: {posted_time}</p>
          <p className="text-xl font-semibold">Seller Name: {seller_name}</p>
          <div className="card-actions justify-center mt-5">
            <label
              htmlFor="booking-modal"
              className="btn btn-primary w-full"
              onClick={() => setSelectedBook(book)}
            >
              Book Now
            </label>
            {/* <BookingModal book={book} key={_id}></BookingModal> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
