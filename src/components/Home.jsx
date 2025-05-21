import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./swiper.css";

import "swiper/css/navigation";

const sliders = [
  {
    id: 1,
    desc: "Roommate wanted - Malibag",
    name_age: "Shamim | 38",
    image: "/slide-1.jpg",
  },
  {
    id: 2,
    desc: "Roommate wanted - Uttara",
    name_age: "Dilruba | 35",
    image: "/slide-2.jpg",
  },
  {
    id: 3,
    desc: "Roommate wanted - Badda",
    name_age: "Moklech | 39",
    image: "/slide-3.jpg",
  },
  {
    id: 4,
    desc: "Roommate wanted - Mirpur",
    name_age: "Amanda | 29",
    image: "/slide-4.jpg",
  },
  {
    id: 5,
    desc: "Roommate wanted - Khilkhet",
    name_age: "Kabir | 40",
    image: "/slide-5.jpg",
  },
  {
    id: 6,
    desc: "Roommate wanted - Tejgaon",
    name_age: "Lota | 34",
    image: "/slide-6.jpg",
  },
  {
    id: 7,
    desc: "Roommate wanted - Malibag",
    name_age: "Hamim | 38",
    image: "/slide-7.jpg",
  },
];

const Home = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold">
          Find Your New Roommate
        </h1>
        <h1 className="text-center text-2xl">
          From{" "}
          <span className="text-[#f2ac08] font-semibold">
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

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          navigation={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation]}
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <div className="flex flex-col justify-center items-center">
                <img
                  src={slider.image}
                  alt="slider"
                  className=" w-10/12 rounded-full object-cover hover:scale-105 transition duration-300"
                />
                <p className="text-[20px] font-semibold pt-5">
                  {slider.name_age}
                </p>
                <p className="text-center pb-5">{slider.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
