// components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Arjun D.",
      feedback: "Abun has saved me countless hours on content strategy. A must-have tool!",
      image: "https://thumbs.dreamstime.com/b/smiling-young-female-content-creator-influencer-home-using-smartphone-ring-light-speaking-microphone-live-streaming-379049632.jpg"
    },
    {
      name: "Sneha K.",
      feedback: "The keyword research is spot on and gives me content that ranks. Love it.",
      image: "https://assets.entrepreneur.com/content/3x2/2000/1629828633-GettyImages-1212772310.jpg?format=pjeg&auto=webp"
    },
    {
      name: "Priya R.",
      feedback: "Simple, fast, and effective. My blog's traffic has doubled since I started using Abun.",
      image: "https://www.socialpilot.co/wp-content/uploads/2023/08/Social-Media-Content-Creator.jpg"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto bg-gradient-to-r from-white to-purple-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Loved by Content Creators</h2>
        <p className="text-gray-600 mt-2">Here’s what our users have to say.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-2xl transition duration-300 transform hover:scale-105">
            <img
              src={t.image}
              alt={`Testimonial from ${t.name}`}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <p className="italic mb-3">"{t.feedback}"</p>
            <div className="text-sm font-semibold text-indigo-700">– {t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;