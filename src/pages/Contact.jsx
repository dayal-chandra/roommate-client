import React from "react";

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h2 className="text-4xl font-bold mb-4" style={{ color: "#f2ac08" }}>
        Contact Us
      </h2>
      <p className=" mb-8">
        Got questions, suggestions, or need help finding the perfect roommate?
        Reach out to us anytime — we're here to help!
      </p>

      <form className=" p-6 rounded-2xl shadow-md max-w-xl mx-auto space-y-4">
        <div className="flex flex-col text-left">
          <label className="mb-1 font-medium" htmlFor="name">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#f2ac08]"
          />
        </div>

        <div className="flex flex-col text-left">
          <label className="mb-1 font-medium" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#f2ac08]"
          />
        </div>

        <div className="flex flex-col text-left">
          <label className="mb-1 font-medium" htmlFor="message">
            Your Message
          </label>
          <textarea
            id="message"
            rows="4"
            placeholder="Type your message"
            className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#f2ac08]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#f2ac08] text-black font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
