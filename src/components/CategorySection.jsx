export default function CategorySection() {
  const categories = [
    { title: "Students", icon: "🎓" },
    { title: "Working Professionals", icon: "💼" },
    { title: "Female Only", icon: "🚺" },
    { title: "Male Only", icon: "🚹" },
    { title: "Pet Friendly", icon: "🐾" },
    { title: "Short-Term Stay", icon: "🕒" },
    { title: "Long-Term Stay", icon: "🏠" },
    { title: "Budget Friendly", icon: "💸" },
    { title: "Luxury Living", icon: "✨" },
    { title: "Near Transport", icon: "🚇" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-center text-2xl md:text-4xl py-10">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border border-[#f2ac08] rounded-xl p-4 hover:bg-[#f2ac08] hover:text-black transition cursor-pointer flex flex-col items-center justify-center space-y-2"
          >
            <div className="text-3xl">{cat.icon}</div>
            <h3 className="font-semibold ">{cat.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
