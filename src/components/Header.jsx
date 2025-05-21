import React from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <div className="navbar px-0 py-4 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <img className="w-10" src={logo} alt="" />
        <Link className="text-2xl font-bold  text-[#d8fb78]">
          Roo<span className="text-[#0b7d31]">m</span>Wala
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px]">
          <li>
            <NavLink to="/" className="rounded-none">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-none" to="/add-to-find-roommate">
              Add to Find Roommate
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-none" to="/browse-listing">
              Browse Listing
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-none" to="/my-listings">
              My Listings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div>
          <button>Dark</button>
        </div>
        <div className="space-x-4 hidden md:flex">
          <button className="bg-[#d8fb78] hover:bg-transparent  hover:text-[#d8fb78] border border-[#d8fb78] text-black py-2 px-5 rounded-sm font-semibold">
            <Link to="/login">Login</Link>
          </button>
          <button className=" text-[#d8fb78] border border-[#d8fb78] hover:bg-[#d8fb78] hover:text-black py-2 px-5 rounded-sm font-semibold">
            <Link to="/signup">Signup</Link>
          </button>
        </div>
        <div>
          <img className="w-12 h-12 rounded-full" src={logo} alt="" />
        </div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
