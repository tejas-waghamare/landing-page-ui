import React from "react";

const ExtraSection = () => {
  const extras = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfw2aeQ0rkfhh4QduRvylt8vXzjmF09M6QEw&s",
      title: "AI Personalization",
      desc: "Tailor your content with advanced AI personalization that adapts to user behavior."
    },
    {
      image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Types_of_Artificial_Intelligence.jpg",
      title: "Types of AI",
      desc: "Explore how Abun supports various AI types, from Narrow to General Intelligence."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEtkFg_-IgKpkI0ijzpb31Kg6fLx9y1GcNFHSDataEmsprBL_DcugfxJgjNrivE4RhAL4&usqp=CAU",
      title: "Content Intelligence",
      desc: "Boost productivity with smart content intelligence and performance insights."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-purple-50 px-6 max-w-6xl mx-auto animate-fade-in-up">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-purple-800 drop-shadow">Next-Level AI Features</h2>
        <p className="text-gray-700 mt-2">Powering the future of smart content creation.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {extras.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.3] transition-all duration-500 ease-in-out"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded mb-4 transform hover:scale-105 transition duration-300"
            />
            <h3 className="text-xl font-semibold mb-2 text-indigo-800">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraSection;