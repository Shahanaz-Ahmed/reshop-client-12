import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const MyProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);

  const closeModal = () => {
    setDeletingProduct(null);
  };

  const {
    data: addedProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["addedProducts"],
    queryFn: () =>
      fetch("http://localhost:5000/addedProducts", {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => res.json()),
  });

  const handleDeleteProduct = (product) => {
    fetch(`http://localhost:5000/addedProducts/${product._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success("Product deleted Successfully");
      });
  };

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
              <th>Advertise</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {addedProducts.map((product, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <img
                    className="w-12 h-12 rounded-full"
                    src={product.img}
                    alt=""
                  />
                </td>
                <td>
                  <button className="btn btn-outline btn-info">
                    Advertise
                  </button>
                </td>
                <td>
                  <label
                    onClick={() => setDeletingProduct(product)}
                    htmlFor="confirmation-modal"
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deletingProduct && (
        <ConfirmationModal
          title={`Are you sure you want to delete?`}
          message={`if you delete, it cannot be undone`}
          successAction={handleDeleteProduct}
          modalData={deletingProduct}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
