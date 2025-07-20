
import React from "react";

const HeroSection = () => (
  <section className="relative min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 bg-gradient-to-br from-black via-cyan-900 to-purple-900 text-white overflow-hidden">
    <div className="absolute top-0 left-0 w-full backdrop-blur-sm bg-black/30 z-20">
      <marquee behavior="scroll" direction="left" className="text-pink-600 font-bold py-2 text-lg">
        🎉 Abun AI helps create smart content faster • Get started FREE today! 🎉
      </marquee>
    </div>
    <img
      src="https://images.prismic.io/bakertilly/ZxAvs4F3NbkBXmmQ_Artificialintelligenceinpalmofmanshand.jpg?auto=format%2Ccompress&rect=0%2C69%2C1920%2C1008&w=1200&h=630"
      alt="AI Writing"
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    />

    {/* Corner Hover-Revealed Images */}
    {[
      {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s",
        position: "top-10 left-10"
      },
      {
        src: "https://trendsresearch.org/wp-content/uploads/2024/12/Future-of-AI.jpg",
        position: "top-10 right-10"
      },
      {
        src: "https://extension.harvard.edu/wp-content/uploads/sites/8/2024/05/AI.jpg",
        position: "bottom-10 left-10"
      },
      {
        src: "https://ric.edu.pk/wp-content/uploads/2025/01/Artificial-Intelligence-1-770x400.jpg",
        position: "bottom-10 right-10"
      }
    ].map((item, i) => (
      <img
        key={i}
        src={item.src}
        alt={`AI corner ${i}`}
        className={`absolute ${item.position} w-70 h-40 object-cover rounded-lg shadow-md opacity-10 hover:opacity-100 transition-opacity duration-500 z-10`}
      />
    ))}

    {/* Right Side Text Content */}
    <div className="mt-20 z-10 max-w-3xl justify-center text-center lg:text-left lg:w-1/2 ">
      <h1 className="text-4xl sm:text-6xl font-bold mb-4 transition duration-500 bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent hover:from-yellow-400 hover:via-lime-600 hover:to-red-800">
        Create Valuable Content with AI
      </h1>
      <p className="text-lg sm:text-xl mb-6">
        Abun helps you generate high-quality content that ranks, engages, and converts—effortlessly. Empower writers, marketers, and creators to focus on ideas, not formatting.
      </p>
      <p className="text-md sm:text-lg mb-6 text-indigo-100">
        With smart AI tools built for real workflows, you can research, write, optimize, and publish in minutes.
      </p>
      <a
        href="#"
        className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition transform hover:scale-105"
      >
        Try Abun Free
      </a>
      <p className="mt-4 text-sm text-indigo-200">No credit card required. Get started instantly.</p>
    </div>
  </section>
);

export default HeroSection;