import React, { useEffect } from "react";
import { Link, useLoaderData } from "react-router";

const BrowseListing = () => {
  useEffect(() => {
    document.title = "RoomWala | BrowseListing";
  }, []);

  const roommates = useLoaderData();
  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl py-10">
        Browse Listings
      </h1>
      <div className="pb-20">
        <div className="overflow-x-auto rounded-box border border-[#f2ac08] bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Location</th>
                <th>Room Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {roommates.map((roommate, index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{roommate.name}</td>
                  <td>{roommate.location}</td>
                  <td>{roommate.roomType}</td>
                  <td>
                    <Link to={`/roommate-details/${roommate._id}`}>
                      <button className="btn bg-[#f2ac08] text-black">
                        See More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BrowseListing;
