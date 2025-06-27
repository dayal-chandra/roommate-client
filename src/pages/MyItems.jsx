import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyItems = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://roommate-server-five.vercel.app/browse-listing")
      .then((res) => res.json())
      .then((data) => {
        const myItems = data.filter((item) => item.email === user?.email);
        setItems(myItems);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <p className="text-center">Loading your items...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">🛍️ My Listed Items</h1>

      {items.length === 0 ? (
        <p className="text-center">You have no items listed yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Location</th>
                <th className="px-4 py-2 border">Rent</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr
                  key={item._id}
                  className="hover:bg-[#f2ac08] hover:text-black"
                >
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">{item.name || "N/A"}</td>
                  <td className="px-4 py-2 border">{item.location || "N/A"}</td>
                  <td className="px-4 py-2 border">
                    ${item.rentAmount || "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyItems;
