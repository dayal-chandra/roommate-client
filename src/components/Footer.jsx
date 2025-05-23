import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-5 bg-[#f2ac08] text-black rounded p-10">
      <div className="text-center">
        <h1 className="text-[20px] font-semibold">Contact:</h1>
        <p>+8801234567890</p>
        <p>+8801098765432</p>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4 justify-center items-center">
          <a href="https://facebook.com/" target="_blank">
            <FaFacebookSquare size={30} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaSquareTwitter size={30} />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <BsLinkedin size={26} />
          </a>
        </div>
      </nav>
      <div>
        <Link to="/terms">Terms & Conditions</Link>
      </div>
      <aside>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by
          RoomWala Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
