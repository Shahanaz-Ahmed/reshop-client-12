import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        console.log(data.name);
        toast.success("User Created Successfully");

        const userInfo = {
          displayName: data.name,
        };
        // console.log(userInfo);
        updateUser(userInfo)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-[500px] border px-7 py-16">
        <h2 className=" text-center mb-6 text-3xl font-serif font-bold italic">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit(handleSignUp)} className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
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
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              className="input input-bordered w-full "
              {...register("email", { required: "Email Address is Required" })}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full mb-6"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Password need to be minimum 6 length",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, special case & a number",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>
          <div>
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </div>
          <input
            className="btn btn-black w-full mt-5"
            type="submit"
            value="Sign Up"
          />
          <p className="text-center">
            Already Have an Account?{" "}
            <Link className="text-purple-500  font-bold" to="/Login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
