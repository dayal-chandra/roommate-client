import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "./swiper.css";
import citya from "/city-1.jpg";
import cityb from "/city-2.jpg";
import cityc from "/city-3.jpg";
import cityd from "/city-4.jpg";

import "swiper/css/navigation";
import { useLoaderData } from "react-router";
import RoommateCard from "./RoommateCard";

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
  useEffect(() => {
    document.title = "RoomWala | Home";
  }),
    [];

  const roommates = useLoaderData();

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
            <SwiperSlide key={slider.id} className="py-4">
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

      <div className="py-20">
        <h1 className="text-center text-2xl text-black md:text-4xl lg:text-6xl bg-[#f2ac08] py-10">
          Finding a roommate should be hassle free.
        </h1>
      </div>
      <h1 className="text-center text-2xl md:text-4xl py-10">
        Featured Roommates Post
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pb-20">
        {roommates.map((roommate) => (
          <RoommateCard key={roommate._id} roommate={roommate}></RoommateCard>
        ))}
      </div>

      <div>
        <h1 className="text-center text-2xl md:text-4xl py-10">
          Find Roommates Across Bangladesh
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-5">
          <div className="relative group overflow-hidden aspect-[4/3]">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={cityd}
              alt=""
            />
            <div
              className="absolute inset-0 flex items-center justify-center 
             opacity-100 translate-y-0 
             md:opacity-0 md:translate-y-full 
             group-hover:md:translate-y-0 group-hover:md:opacity-100 
             transition-all duration-500"
            >
              <h1 className="text-2xl text-center font-semibold text-black w-full bg-[#f2ac08c9]">
                Dhaka
              </h1>
            </div>
          </div>
          <div className="relative group overflow-hidden aspect-[4/3]">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={citya}
              alt=""
            />
            <div
              className="absolute inset-0 flex items-center justify-center 
             opacity-100 translate-y-0 
             md:opacity-0 md:translate-y-full 
             group-hover:md:translate-y-0 group-hover:md:opacity-100 
             transition-all duration-500"
            >
              <h1 className="text-2xl text-center font-semibold text-black w-full bg-[#f2ac08c9]">
                Chittagong
              </h1>
            </div>
          </div>
          <div className="relative group overflow-hidden aspect-[4/3]">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={cityb}
              alt=""
            />
            <div
              className="absolute inset-0 flex items-center justify-center 
             opacity-100 translate-y-0 
             md:opacity-0 md:translate-y-full 
             group-hover:md:translate-y-0 group-hover:md:opacity-100 
             transition-all duration-500"
            >
              <h1 className="text-2xl text-center font-semibold text-black w-full bg-[#f2ac08c9]">
                Shylet
              </h1>
            </div>
          </div>
          <div className="relative group overflow-hidden aspect-[4/3]">
            <img
              className="w-full h-full object-cover rounded-2xl"
              src={cityc}
              alt=""
            />
            <div
              className="absolute inset-0 flex items-center justify-center 
             opacity-100 translate-y-0 
             md:opacity-0 md:translate-y-full 
             group-hover:md:translate-y-0 group-hover:md:opacity-100 
             transition-all duration-500"
            >
              <h1 className="text-2xl text-center font-semibold text-black w-full bg-[#f2ac08c9]">
                Rangpur
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="py-30">
        <h1 className="text-center text-2xl text-black md:text-4xl lg:text-6xl bg-[#f2ac08] py-10">
          Frequently Asked Questions
        </h1>
        <div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              Can RoomWala help me find roommates?
            </div>
            <div className="collapse-content text-sm">
              Of course, that's exactly what we're here for! RoomWala is a
              roommate finder platform designed to help you connect with
              like-minded roommates. Whether you're looking for rooms for rent,
              need a roommate to fill your empty room, or want to team up with
              someone to find a new place, we've got you covered. We even offer
              listings for entire apartments for rent and coliving spaces in
              select cities.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What cities does RoomWala currently operate in?
            </div>
            <div className="collapse-content text-sm">
              RoomWala operates in and around most major cities across
              Bangladesh, including Dhaka, Mirpur, Uttara, Boshundhara, Savar,
              Chittagong, Shylet, Rajshahi, Gazipur and many more. Visit our
              location page in our Help Center to see all available cities, or
              our Roommate Finder Near me page to find roommates and rooms
              around you.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Does it cost anything to sign up or use RoomWala?
            </div>
            <div className="collapse-content text-sm">
              RoomWala is a completely free roommate finder. You can list a room
              for rent, create a roommate wanted ad, express interest, view and
              reply to messages, and verify your profile—all at no cost (unlike
              some other roommate finders). Optional upgrades are available to
              boost your visibility and accelerate your search, but they're not
              required to access essential features.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              Can I find a roommate to team up with me to find a place?
            </div>
            <div className="collapse-content text-sm">
              Yes! Many of the members on RoomWala are looking for rooms for
              rent and / or another person to partner with to get a place. In
              fact, most of the matches occur between two individuals for that
              purpose exactly.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What makes RoomWala different from other roommate apps?
            </div>
            <div className="collapse-content text-sm">
              RoomWala is one of the best apps to find roommates, offering a
              seamless roommate search experience powered by a matching
              algorithm. With verified, detailed profiles, user-friendly
              messaging, and over 20 filters, we help you find high-quality,
              like-minded roommates with ease. Unlike platforms like Reddit or
              Facebook groups, RoomWala provides curated profiles and proactive
              search options, allowing you to connect directly with compatible
              roommates—whether you're offering a room or teaming up to find a
              new place.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How does RoomWala match me with compatible roommates?
            </div>
            <div className="collapse-content text-sm">
              RoomWala's algorithm uses your personality, lifestyle, and
              preferences to match you with compatible roommates, ensuring a
              positive experience. When you start your search, the best options
              for you will be ranked at the top. To ensure you also show up at
              the top of other's roommate search results, make sure you have a
              complete and verified profile. Learn more about our Roommate
              Matching Algorithm.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300">
            <input type="checkbox" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              What should I include in my roommate profile to get the best
              match?
            </div>
            <div className="collapse-content text-sm">
              For the best match, create a complete profile with a quality
              photo, honest roommate bio, and details about your lifestyle,
              habits, and preferences. Include what you're looking for in a
              roommate, and mention hobbies or interests as icebreakers. Being
              proactive and responsive will also boost your chances of finding
              the right fit.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
