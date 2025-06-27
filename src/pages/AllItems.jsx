import { useEffect, useState } from "react";

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://roommate-server-five.vercel.app/browse-listing")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center">Loading items...</p>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">📦 All Listed Items</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Location</th>
              <th className="px-4 py-2 border">Rent</th>
              <th className="px-4 py-2 border">Posted By</th>
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
                <td className="px-4 py-2 border">{item.email || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllItems;
