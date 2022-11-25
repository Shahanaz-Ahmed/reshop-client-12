import React, { useEffect, useState } from "react";
import AvailableCategories from "./AvailableCategories/AvailableCategories";

const BookCategories = () => {
  const [bookCategories, setBookCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setBookCategories(data));
  });
  return (
    <section className="my-12">
      <p className="text-center font-bold mb-12 text-4xl italic font-serif ">
        Book Categories
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {bookCategories.map((categories, i) => (
          <AvailableCategories
            key={i}
            categories={categories}
          ></AvailableCategories>
        ))}
      </div>
    </section>
  );
};

export default BookCategories;
