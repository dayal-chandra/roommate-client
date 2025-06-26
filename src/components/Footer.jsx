import logo from "/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#f2ac08]">
      <div className="flex flex-col justify-center items-center gap-5  text-black rounded p-10">
        <div className="flex flex-col md:flex-row justify-around items-center w-full gap-10">
          <div>
            <img className="w-10" src={logo} alt="" />
            <Link to="/" className="text-2xl font-bold  text-black">
              Roo<span className="text-[#26a010]">m</span>Wala
            </Link>
          </div>
          <div>
            <div className="text-center">
              <h1 className="text-[20px] font-semibold">Contact:</h1>
              <p>+8801234567890</p>
              <p>+8801098765432</p>
            </div>
          </div>
          <nav>
            <h1 className="text-[20px] font-semibold">Social</h1>
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
        </div>
        <div>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
        <aside>
          <p className="text-center">
            Copyright © {new Date().getFullYear()} - All right reserved by
            RoomWala Ltd
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
