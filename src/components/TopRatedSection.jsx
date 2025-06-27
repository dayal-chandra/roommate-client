export default function TopRatedSection() {
  // Dummy Data
  const topRoommates = [
    {
      id: 1,
      name: "Sarah Ahmed",
      photo:
        "https://i.ibb.co/ZphzFKhm/59f5792e-6311-439e-baba-cb8edb25ca8d.png",
      location: "Dhaka, Bangladesh",
      rating: 4.8,
    },
    {
      id: 2,
      name: "John Smith",
      photo: "https://i.ibb.co/8LLyGQPr/profile.png",
      location: "Chattogram, Bangladesh",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Mehzabin Hossain",
      photo:
        "https://i.ibb.co/hxF8pK5x/307c7754-f11e-4012-837c-c319b2412ee7.webp",
      location: "Sylhet, Bangladesh",
      rating: 4.9,
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl md:text-4xl py-10">
        Top-Rated Roommates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topRoommates.map((roommate) => (
          <div
            key={roommate.id}
            className="border border-[#f2ac08] rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={roommate.photo}
              alt={roommate.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-2xl font-semibold">{roommate.name}</h3>
              <p>{roommate.location}</p>
              <p className="text-yellow-500 font-semibold">
                ⭐ {roommate.rating}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
