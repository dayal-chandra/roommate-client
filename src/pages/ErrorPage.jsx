import React from "react";
import error from "/error.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        className="w-1/2 md:w-[350px] mx-auto mb-5 mt-20 bg-[#f2ac08] rounded-2xl"
        src={error}
        alt=""
      />
      <button className="bg-[#f2ac08] rounded-xl py-3 px-8 text-black text-2xl font-semibold">
        <Link to="/">Go to Homepage</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
