import React from "react";
import { Link } from "react-router";

const RoommateCard = ({ roommate }) => {
  const { _id, name, title, location, rentAmount, contact, availability } =
    roommate;
  return (
    <div>
      <div className="card border border-[#f2ac08]">
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="text-[20px] font-bold">{name}</h2>
            <span className="text-xl">{rentAmount}/mo</span>
          </div>
          <p className="text-2xl">{title}</p>
          <p>
            <span className="font-bold">Location:</span> {location}
          </p>
          <p>
            <span className="font-bold">Contact:</span> {contact}
          </p>
          <p>
            <span className="font-bold">Availability:</span> {availability}
          </p>

          <div className="mt-6">
            <Link to={`/roommate-details/${_id}`}>
              <button className="btn bg-[#f2ac08] text-black">See more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoommateCard;
