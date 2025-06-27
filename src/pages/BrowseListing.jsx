import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import ItemCard from "../components/ItemCard";

const BrowseListing = () => {
  const roommates = useLoaderData();
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedRoommates, setSortedRoommates] = useState([]);

  useEffect(() => {
    document.title = "RoomWala | BrowseListing";
  }, []);

  useEffect(() => {
    const sorted = [...roommates].sort((a, b) => {
      const rentA = parseFloat(a.rentAmount);
      const rentB = parseFloat(b.rentAmount);
      return sortOrder === "asc" ? rentA - rentB : rentB - rentA;
    });
    setSortedRoommates(sorted);
  }, [sortOrder, roommates]);

  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl pt-10">Browse Listing</h1>
      <p className="text-center pb-5">
        All posts are here. Find your roommate here.
      </p>

      {/* Sort Filter */}
      <div className="flex justify-end px-5 pb-5">
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded p-2"
        >
          <option className="bg-black" value="asc">
            Low to High Rent
          </option>
          <option className="bg-black" value="desc">
            High to Low Rent
          </option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 pb-20">
        {sortedRoommates.map((roommate, index) => (
          <ItemCard key={index} roommate={roommate}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default BrowseListing;
