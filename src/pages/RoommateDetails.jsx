import React, { use, useEffect, useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const RoommateDetails = () => {
  useEffect(() => {
    document.title = "RoomWala | Details";
  }, []);

  const { user } = use(AuthContext);

  const roommates = useLoaderData();
  const { id } = useParams();
  const roommate = roommates.find((mate) => mate._id?.toString() === id);

  const {
    name,
    email,
    photo,
    title,
    location,
    rentAmount,
    roomType,
    lifestyle,
    description,
    contact,
    availability,
  } = roommate;

  const [showContact, setShowContact] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    if (user.email !== email) {
      if (!isLiked) {
        setLikeCount((prev) => prev + 1);
      } else {
        setLikeCount((prev) => prev - 1);
      }

      setIsLiked(!isLiked);
      setShowContact(!showContact);
    } else {
      Swal.fire({
        title: "Access Denied",
        text: "You cannot like your own post.",
        icon: "warning",
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="border border-[#f2ac08] rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/2 h-72 md:h-auto">
          <img src={photo} alt={name} className="w-full h-full object-cover" />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between space-y-4">
          <div>
            <h2 className="text-4xl font-bold text-[#f2ac08] mb-2">{title}</h2>
            <p className=" mb-1">
              <span className="font-semibold">Location: </span>
              {location}
            </p>
            <p className=" mb-1">
              <span className="font-semibold">Rent: </span> {rentAmount}/mo
            </p>
            <p className=" my-4">{description}</p>
            <p>
              <span className="font-semibold">Name: </span>
              {name}
            </p>
            <p>
              <span className="font-semibold">Email: </span>
              {email}
            </p>
            <p>
              <span className="font-semibold">Room Type: </span>
              {roomType}
            </p>
            <p>
              <span className="font-semibold">LifeStyle: </span>
              {lifestyle}
            </p>
            <p>
              <span className="font-semibold">Availability: </span>
              {availability}
            </p>
            <p className="flex gap-4">
              <span className="font-semibold">Contact: </span>
              {showContact ? (
                <p>{contact}</p>
              ) : (
                <p className="text-center text-[#f2ac08]">
                  Like this post for contact number!
                </p>
              )}
            </p>
          </div>

          <div className=" flex flex-col justify-end items-end gap-3">
            <p>
              <span>{likeCount}</span> Like
            </p>
            <button onClick={handleLikeClick}>
              <FaThumbsUp size={35} color={showContact ? "#f2ac08" : "gray"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetails;
