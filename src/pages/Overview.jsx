import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Overview = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState({
    totalItems: 0,
    myItems: 0,
  });

  useEffect(() => {
    fetch("https://roommate-server-five.vercel.app/browse-listing")
      .then((res) => res.json())
      .then((data) => {
        const total = data.length;
        const myItems = data.filter(
          (item) => item.email === user?.email
        ).length;

        setStats({
          totalItems: total,
          myItems: myItems,
        });
      });
  }, [user]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📊 Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#f2ac08] text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">Total Listings</h2>
          <p className="text-3xl font-bold">{stats.totalItems}</p>
        </div>

        <div className="bg-[#f2ac08] text-black p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold">My Listings</h2>
          <p className="text-3xl font-bold">{stats.myItems}</p>
        </div>
      </div>

      <div className="bg-[#f2ac08] text-black p-6 rounded-lg shadow-lg max-w-md">
        <h2 className="text-xl font-semibold mb-4">👤 User Information</h2>
        <p>
          <strong>Name:</strong> {user?.displayName || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {user?.email || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default Overview;
