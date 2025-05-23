import React, { useEffect } from "react";

const MyListing = () => {
  useEffect(() => {
    document.title = "RoomWala | MyListing";
  }, []);
  return (
    <div>
      <h1>my listing</h1>
    </div>
  );
};

export default MyListing;
