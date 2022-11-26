import React from "react";
import { useLoaderData } from "react-router-dom";
import BooksCard from "../BooksCard/BooksCard";

const Category = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="mx-6 mt-6">
      <h2 className="text-2xl font-semibold">
        {books.name} The following Category have:
      </h2>
      <div className="mt-6 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
        {books.map((book) => (
          <BooksCard key={book._id} book={book}></BooksCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
