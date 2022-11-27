import { useQuery } from "@tanstack/react-query";
import AvailableCategories from "./AvailableCategories/AvailableCategories";
import Loading from "../../Shared/Loading/Loading";

const BookCategories = () => {
  const { data: bookCategories = [], isLoading } = useQuery({
    queryKey: ["BookCategories"],
    queryFn: () =>
      fetch("http://localhost:5000/BookCategories").then((res) => res.json()),
  });

  if (isLoading) {
    return <Loading></Loading>;
  }

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
