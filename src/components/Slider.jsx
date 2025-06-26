import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function ImageCarousel() {
  const slides = [
    {
      image: "https://i.ibb.co/8qTqk14/pexels-heyho-8146320.jpg",
      heading: "Find Your Roommate Here",
      subtext: "Let your journey begin with us",
    },
    {
      image:
        "https://i.ibb.co/VY9y7bBv/pexels-alexander-f-ungerer-157458816-20025667.jpg",
      heading: "Explore New Horizons",
      subtext: "Adventure is calling, are you ready?",
    },
    {
      image:
        "https://i.ibb.co/zhQkpBWH/pexels-alexander-f-ungerer-157458816-20025664.jpg",
      heading: "Find Beautiful Condo",
      subtext: "Experience the beauty off the beaten path",
    },
    {
      image:
        "https://i.ibb.co/MDDzVC47/pexels-curtis-adams-1694007-7028110.jpg",
      heading: "Best Rooms Ever",
      subtext: "Reconnect with the great outdoors",
    },
  ];

  return (
    <div className="w-full">
      <Swiper
        modules={[Autoplay, Pagination]}
        // effect="fade"
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[250px] md:h-[500px]">
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-[250px] md:h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-3xl md:text-5xl text-[#f2ac08] font-bold mb-2 drop-shadow-lg">
                  {slide.heading}
                </h2>
                <p className="text-lg md:text-2xl drop-shadow-md">
                  <Typewriter
                    words={[slide.subtext]}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
