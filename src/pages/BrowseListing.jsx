import React, { useEffect } from "react";

const BrowseListing = () => {
  useEffect(() => {
    document.title = "RoomWala | BrowseListing";
  }, []);
  return (
    <div>
      <h1>Browse Listing</h1>
    </div>
  );
};

export default BrowseListing;
