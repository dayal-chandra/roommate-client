import React from "react";
import { Link } from "react-router";

const RoommateCard = ({ roommate }) => {
  const { _id, location, rentAmount, photo } = roommate;
  return (
    <div className="card shadow-sm h-full border border-[#f2ac08]">
      <figure>
        <img className="w-full" src={photo} alt="" />
      </figure>
      <div className="card-body pb-0">
        <div className="flex justify-between">
          <p>{rentAmount}/mo</p>
          <p>{location}</p>
        </div>
      </div>

      <div className="m-4 card-actions justify-end">
        <Link to={`/roommate-details/${_id}`}>
          <button className="btn bg-[#f2ac08] text-black">See more</button>
        </Link>
      </div>
    </div>
  );
};

export default RoommateCard;
