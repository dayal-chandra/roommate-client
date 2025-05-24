import React, { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateRoommate = () => {
  const { user } = use(AuthContext);
  const { id } = useParams();
  // console.log(id);

  const roommate = useLoaderData();
  // console.log(roommate);

  const {
    _id,
    title,
    location,
    rentAmount,
    roomType,
    lifestyle,
    description,
    contact,
  } = roommate.find((mate) => mate._id === id);
  // console.log(_id, name, title, location, rentAmount, contact, availability);

  const handleUpdateRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoommate = Object.fromEntries(formData.entries());
    console.log(updatedRoommate);

    fetch(`https://roommate-server-five.vercel.app/browse-listing/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRoommate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your data has been modified",
            showConfirmButton: false,
            timer: 2500,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdateRoommate}>
        <h1 className="text-4xl text-center py-10">Update Find Post</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pb-10">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Title</label>
            <input
              type="text"
              className="input w-full"
              name="title"
              defaultValue={title}
              placeholder="Looking for a roommate in Dhaka"
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Location</label>
            <input
              type="text"
              className="input w-full"
              name="location"
              defaultValue={location}
              placeholder="Your Location"
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Rent Amount</label>
            <input
              type="text"
              className="input w-full"
              name="rentAmount"
              defaultValue={rentAmount}
              placeholder="Apartment Rent Amount"
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Room Type</label>
            <input
              type="text"
              className="input w-full"
              name="roomType"
              defaultValue={roomType}
              placeholder="Single/Shared"
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Lifestyle Preferences</label>
            <input
              type="text"
              className="input w-full"
              name="lifestyle"
              defaultValue={lifestyle}
              placeholder="Pets, Smoking, Night Owl, etc."
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Description</label>
            <input
              type="text"
              className="input w-full"
              name="description"
              defaultValue={description}
              placeholder="Say about your room"
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Contact Info</label>
            <input
              type="text"
              className="input w-full"
              name="contact"
              defaultValue={contact}
              placeholder="Your Contact Info"
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">Availability</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  value="Yes"
                  className="radio"
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="availability"
                  value="No"
                  className="radio"
                />
                No
              </label>
            </div>
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">User Email</label>
            <input
              type="email"
              className="input w-full"
              name="email"
              value={user ? user.email : ""}
              readOnly
              required
            />
          </fieldset>{" "}
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
            <label className="text-[16px]">User Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              value={user ? user.displayName : ""}
              readOnly
              required
            />
          </fieldset>
        </div>

        <input
          type="submit"
          value="Update"
          className="btn w-full border border-gray-200 mb-20 bg-[#f2ac08] md:bg-transparent hover:bg-[#f2ac08] "
        />
      </form>
    </div>
  );
};

export default UpdateRoommate;
