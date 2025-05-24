import React, { use, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  useEffect(() => {
    document.title = "RoomWala | Signup";
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const { createUser, setUser, updateUser, googleLogin } = use(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome, ${user.displayName}! Logged in successfully.`,
          showConfirmButton: false,
          timer: 2500,
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          position: "center",
          icon: "error",
          title: { errorMessage },
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      Swal.fire({
        title: "Invalid Password",
        text: "Password must be at least 6 characters long.",
        icon: "warning",
      });
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Invalid Password",
        text: "Password must contain at least one uppercase letter.",
        icon: "warning",
      });
      return;
    }

    if (!/[a-z]/.test(password)) {
      Swal.fire({
        title: "Invalid Password",
        text: "Password must contain at least one lowercase letter.",
        icon: "warning",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Signed up successfully.",
            showConfirmButton: false,
            timer: 2500,
          });
          form.reset();
          navigate(`${location.state ? location.state : "/"}`);
        }

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            position: "center",
            icon: "warning",
            title: `${error.message}`,
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };
  return (
    <div className="w-full md:w-1/2 mx-auto bg-base-200 border-base-300 rounded-box border py-10 px-5 my-5">
      <form onSubmit={handleSignUp} className="fieldset w-full">
        <h1 className="text-2xl font-bold text-center text-[#f2ac08] pb-5">
          Please Signup
        </h1>

        <label className="label text-[16px] text-base-content">Name</label>
        <input
          type="text"
          name="name"
          className="input w-full"
          placeholder="Your Name"
          required
        />
        <label className="label text-[16px] text-base-content">Photo URL</label>
        <input
          type="text"
          name="photo"
          className="input w-full"
          placeholder="Photo URL"
          required
        />
        <label className="label text-[16px] text-base-content">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
          required
        />

        <label className="label text-[16px] text-base-content">Password</label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="input w-full"
            placeholder="Password"
            required
          />
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className="z-50 absolute top-[10px] right-4"
          >
            {showPassword ? (
              <FaEyeSlash size={20}></FaEyeSlash>
            ) : (
              <FaEye size={20}></FaEye>
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 mt-5 font-semibold rounded-md border text-[16px] hover:bg-[#f2ac08]"
        >
          Signup
        </button>
        <p className="text-[16px]">
          Already have an account?{" "}
          <Link className="text-indigo-400" to="/login">
            Login
          </Link>
        </p>

        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 text-base-content">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
      </form>
      <button
        onClick={handleGoogleLogin}
        aria-label="Login with Google"
        type="submit"
        className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 hover:bg-[#f2ac08] "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-5 h-5 fill-current"
        >
          <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
        </svg>
        <p className="text-[16px] font-semibold">Continue with Google</p>
      </button>
    </div>
  );
};

export default Signup;
