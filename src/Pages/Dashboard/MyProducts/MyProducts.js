import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const { data: addedProducts, isLoading } = useQuery({
    queryKey: ["addedProducts"],
    queryFn: () =>
      fetch("http://localhost:5000/addedProducts", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>My Products:{addedProducts?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Sales Status</th>
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addedProducts.map((products, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={products.img}
                    alt=""
                  />
                </td>
                <td>Quality Control Specialist</td>
                <td>
                  <button className="btn btn-outline btn-info">
                    Advertise
                  </button>
                </td>
                <td>
                  <button className="btn btn-outline btn-error">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
