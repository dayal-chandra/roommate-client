import React, { use, useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import Swal from "sweetalert2";

const MyListing = () => {
  useEffect(() => {
    document.title = "RoomWala | MyListing";
  }, []);

  const { user } = use(AuthContext);

  const roommates = useLoaderData();
  const addedDataByUser = roommates?.filter(
    (roommate) => roommate.email === user.email
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/browse-listing/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl md:text-4xl py-10">My Listings</h1>
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
                <th>Rent</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {addedDataByUser.map((roommatedata, index) => (
                <tr key={index} roommatedata={roommatedata}>
                  <th>{index + 1}</th>
                  <td>{roommatedata.name}</td>
                  <td>{roommatedata.location}</td>
                  <td>{roommatedata.roomType}</td>
                  <td>{roommatedata.rentAmount}/mo</td>
                  <td className="flex justify-around items-center gap-4">
                    <Link to={`/update-roommate/${roommatedata._id}`}>
                      <FaPen size={30} />
                    </Link>

                    <button onClick={() => handleDelete(roommatedata._id)}>
                      <MdDelete size={35} />
                    </button>
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

export default MyListing;
