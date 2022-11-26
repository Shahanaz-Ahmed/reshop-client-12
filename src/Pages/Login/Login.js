import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-[500px] border px-7 py-16">
        <h2 className=" text-center mb-6 text-3xl font-serif font-bold italic">
          Login
        </h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>

            <input
              type="text"
              {...register("email")}
              placeholder="Email"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>

            <input
              type="text"
              {...register("password")}
              placeholder="Password"
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>
          </div>
          <input
            type="submit"
            className="btn btn-black w-full mt-5"
            value="Login"
          />
        </form>
        <p>
          New to ReShop ?{"  "}
          <Link className="text-purple-500 font-bold" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full text-black">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
