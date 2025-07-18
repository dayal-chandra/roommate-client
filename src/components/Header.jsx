import React, { use, useEffect, useState } from "react";
import logo from "/logo.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout successful.",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const [open, setOpen] = useState(false);

  return (
    <div className="navbar px-0 border-b border-[#f2ac084f] sticky top-0 backdrop-blur bg-transparent shadow z-50">
      <div className="navbar-start">
        <img className="w-10" src={logo} alt="" />
        <Link to="/" className="text-2xl font-bold  text-[#f2ac08]">
          Roo<span className="text-[#26a010]">m</span>Wala
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[16px]">
          <li>
            <NavLink to="/" className="rounded-none">
              Home
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink className="rounded-none" to="/add-to-find-roommate">
                Add to Find Roommate
              </NavLink>
            </li>
          ) : (
            ""
          )}
          <li>
            <NavLink className="rounded-none" to="/browse-listing">
              Browse Listings
            </NavLink>
          </li>
          {user ? (
            <li>
              <NavLink className="rounded-none" to="/my-listings">
                My Listings
              </NavLink>
            </li>
          ) : (
            ""
          )}
          <li>
            <NavLink className="rounded-none" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="rounded-none" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <label className="swap swap-rotate">
          <input
            type="checkbox"
            onChange={(e) => {
              const theme = e.target.checked ? "dark" : "light";
              document.documentElement.setAttribute("data-theme", theme);
              localStorage.setItem("theme", theme);
            }}
          />

          {/* sun icon */}
          <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-[#f2ac08] hover:bg-transparent  hover:text-[#f2ac08] border border-[#f2ac08] text-black ml-4 py-2 px-5 rounded-sm font-semibold hidden md:flex"
          >
            Logout
          </button>
        ) : (
          <div className="space-x-4 hidden md:flex">
            <Link to="/login">
              <button className="bg-[#f2ac08] hover:bg-transparent  hover:text-[#f2ac08] border border-[#f2ac08] text-black py-2 px-5 rounded-sm font-semibold">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className=" text-[#f2ac08] border border-[#f2ac08] hover:bg-[#f2ac08] hover:text-black py-2 px-5 rounded-sm font-semibold">
                Signup
              </button>
            </Link>
          </div>
        )}

        <div className="bg-base-100 px-2">
          <div className="flex-1">
            {user ? (
              <div className="dropdown">
                <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={`${user.photoURL}`}
                      alt="profile"
                      data-tooltip-id="my-tooltip-inline"
                      data-tooltip-content={`${user ? user.displayName : ""}`}
                      data-tooltip-place="top"
                    />
                    <Tooltip
                      id="my-tooltip-inline"
                      place="top"
                      style={{ backgroundColor: "#f2ac08", color: "black" }}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-44 p-2 shadow right-0"
                >
                  <li>
                    <NavLink to="/dashboard" className="rounded-none">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="rounded-none"
                      to="/add-to-find-roommate"
                    >
                      Add to Find Roommate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="rounded-none" to="/browse-listing">
                      Browse Listings
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="rounded-none" to="/my-listings">
                      My Listings
                    </NavLink>
                  </li>
                  {user ? (
                    <button
                      onClick={handleLogout}
                      className="bg-[#f2ac08] hover:bg-transparent  hover:text-[#f2ac08] border border-[#f2ac08] text-black py-2 px-5 rounded-sm font-semibold  md:hidden"
                    >
                      Logout
                    </button>
                  ) : (
                    <div className="md:hidden flex flex-col gap-3">
                      <Link to="/login">
                        <button className="bg-[#f2ac08] hover:bg-transparent  hover:text-[#f2ac08] border border-[#f2ac08] text-black py-2 px-5 rounded-sm font-semibold">
                          Login
                        </button>
                      </Link>
                      <Link to="/signup">
                        <button className=" text-[#f2ac08] border border-[#f2ac08] hover:bg-[#f2ac08] hover:text-black py-2 px-5 rounded-sm font-semibold">
                          Signup
                        </button>
                      </Link>
                    </div>
                  )}
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
