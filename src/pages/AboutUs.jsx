import React from "react";

const AboutUs = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-center">
      <h2 className="text-4xl font-bold mb-4 text-[#f2ac08]">About Us</h2>
      <p className="text-lg mb-6">
        Finding the right roommate shouldn't be stressful. At{" "}
        <span className="font-semibold text-[#f2ac08]">RoomWala</span>, we're
        making it easier than ever to connect with people who share your
        lifestyle, preferences, and expectations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 text-[#f2ac08]">
            Our Mission
          </h3>
          <p className="text-gray-600">
            To help people find trustworthy roommates and build safe,
            comfortable living spaces together.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 text-[#f2ac08]">Why Us</h3>
          <p className="text-gray-600">
            We use smart filters, verified profiles, and clear preferences to
            match you with ideal roommates, reducing hassle and
            misunderstandings.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 text-[#f2ac08]">
            Community First
          </h3>
          <p className="text-gray-600">
            Our platform fosters a community where safety, respect, and
            compatibility come first — because your home should feel like home.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
