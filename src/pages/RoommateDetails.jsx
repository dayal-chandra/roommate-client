import React, { useEffect } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";

const RoommateDetails = () => {
  useEffect(() => {
    document.title = "RoomWala | Details";
  }, []);

  const roommates = useLoaderData();
  const { id } = useParams();
  const roommate = roommates.find((mate) => mate._id?.toString() === id);

  const {
    name,
    email,
    title,
    location,
    rentAmount,
    roomType,
    lifestyle,
    description,
    contact,
    availability,
  } = roommate;
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl py-10">
        Roommate Details
      </h1>
      <div className="p-5 md:p-10 w-full md:w-11/12 lg:w-10/12 mx-auto border border-[#f2ac08] rounded-2xl mb-20">
        <h1 className="text-[20px] text-center  bg-[#f2ac08] text-black py-2 mb-4">
          {title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-end gap-5">
          <div>
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">Email:</span> {email}
            </p>
            {/* <p>
              <span className="font-bold">Contact:</span> {contact}
            </p> */}
            <p>
              <span className="font-bold">Location:</span> {location}
            </p>
            <p>
              <span className="font-bold">Rent Amount:</span> {rentAmount}/mo
            </p>
            <p>
              <span className="font-bold">Room Type:</span> {roomType}
            </p>
            <p>
              <span className="font-bold">Lifestyle:</span> {lifestyle}
            </p>
            <p>
              <span className="font-bold">Description:</span> {description}
            </p>

            <p>
              <span className="font-bold">Availability:</span> {availability}
            </p>
          </div>
          <div className=" flex flex-col justify-end items-end gap-3">
            <FaThumbsUp size={35} />
            <p>0 people interested in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetails;
