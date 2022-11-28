import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const handleAddDoctor = (data) => {
    const addProduct = {
      name: data.name,
      condition: data.condition,
      price: data.price,
      phone_number: data.phone,
      location: data.location,
      category: data.category,
      year_of_purchase: data.purchase_year,
      img: data.img_url,
    };

    fetch("http://localhost:5000/addedProducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success(`Your Product is added successfully`);
        navigate("/dashboard/myProducts");
      });
  };
  return (
    <div>
      <h2 className="text-center text-2xl font-serif font-bold italic mb-5">
        Add Product
      </h2>
      <form
        onSubmit={handleSubmit(handleAddDoctor)}
        className="border p-7 grid grid-cols-2 gap-4 shadow"
      >
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            type="name"
            className="input input-bordered w-full "
            {...register("name", { required: "Name is Required" })}
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("price")}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Condition</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("condition")}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("phone")}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("location")}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("category")}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("img_url")}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Year of purchase</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full "
            {...register("purchase_year")}
          />
        </div>
        <input
          className="btn btn-black w-full mt-5"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
