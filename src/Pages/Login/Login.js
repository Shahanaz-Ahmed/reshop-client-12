import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, provideLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    const role = data.login_user;
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
        saveUser(user.displayName, data.email, data.login_user, role);
        // navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    provideLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((e) => {
        console.error(e);
      });
  };
  // new
  const saveUser = (name, email, login_user, role) => {
    const user = { name, email, login_user, role };
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginUserEmail(email);
      });
  };
  //
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
              {...register("email", { required: "Email Address is required" })}
              placeholder="Email"
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          {/* buyer seller part */}
          <label className="label">
            <span className="label-text">User Options</span>
          </label>
          <select
            {...register("login_user")}
            className="select select-bordered w-full"
            name="login_user"
            id=""
          >
            <option>buyer</option>
            <option>seller</option>
          </select>

          {/*  */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Enter Password</span>
            </label>

            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 Character or longer",
                },
              })}
              placeholder="Password"
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget Password ?</span>
            </label>
          </div>

          <input
            type="submit"
            className="btn btn-black w-full mt-5"
            value="Login"
          />
          <div>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </div>
        </form>
        <p>
          New to ReShop ?{"  "}
          <Link className="text-purple-500 font-bold" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full text-black"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
