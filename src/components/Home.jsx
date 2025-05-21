import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-5xl text-center font-semibold">
          Find Your New Roommate
        </h1>
        <h1 className="text-center">
          From{" "}
          <span style={{ color: "#f2ac08", fontWeight: "bold" }}>
            <Typewriter
              words={["Anywhere", "Anytime", "Anyone"]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
