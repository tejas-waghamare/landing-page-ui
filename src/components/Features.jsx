// import React from "react";
// import { FaMagic, FaSearch, FaClock } from "react-icons/fa";

// const Features = () => {
//   const items = [
//     {
//       icon: <FaMagic className="text-indigo-600 text-3xl mb-4" />,
//       title: "Content Samples",
//       desc: "Get AI-generated content samples tailored to your topic and audience.",
//       image: "https://cdn1.vectorstock.com/i/1000x1000/99/30/beta-testing-concept-landing-page-vector-32339930.jpg"
//     },
//     {
//       icon: <FaSearch className="text-indigo-600 text-3xl mb-4" />,
//       title: "Keyword Research",
//       desc: "Discover high-performing keywords to boost your content visibility.",
//       image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1748252447/catalog/1925139058552562101/zv30svwiweyn4mi8z4iv.jpg"
//     },
//     {
//       icon: <FaClock className="text-indigo-600 text-3xl mb-4" />,
//       title: "Fast & Accurate",
//       desc: "Produce SEO-optimized content in minutes, not hours.",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPOvgn5OBEwflmlxRliM5H7I_kpqn4zKgXg&s"
//     },
//   ];

//   return (
//     <section className="py-20 px-6 max-w-6xl mx-auto">
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-bold">What Abun Offers</h2>
//         <p className="text-gray-600 mt-2">Smart tools to accelerate your content workflow.</p>
//       </div>
//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {items.map((item, i) => (
//           <div key={i} className="p-6 border rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transform transition duration-300 bg-white">
//             <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded mb-4" />
//             {item.icon}
//             <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//             <p className="text-gray-600">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Features;


import React from "react";
import { FaMagic, FaSearch, FaClock } from "react-icons/fa";

const Features = () => {
  const items = [
    {
      icon: <FaMagic className="text-indigo-600 text-3xl mb-4" />,
      title: "Content Samples",
      desc: "Get AI-generated content samples tailored to your topic and audience.",
      image: "https://cdn1.vectorstock.com/i/1000x1000/99/30/beta-testing-concept-landing-page-vector-32339930.jpg"
    },
    {
      icon: <FaSearch className="text-indigo-600 text-3xl mb-4" />,
      title: "Keyword Research",
      desc: "Discover high-performing keywords to boost your content visibility.",
      image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_400/v1748252447/catalog/1925139058552562101/zv30svwiweyn4mi8z4iv.jpg"
    },
    {
      icon: <FaClock className="text-indigo-600 text-3xl mb-4" />,
      title: "Fast & Accurate",
      desc: "Produce SEO-optimized content in minutes, not hours.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPPOvgn5OBEwflmlxRliM5H7I_kpqn4zKgXg&s"
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">What Abun Offers</h2>
        <p className="text-gray-600 mt-2">Smart tools to accelerate your content workflow.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg shadow-sm bg-white transition-transform duration-300 transform hover:shadow-lg rotate-12 hover:rotate-0"
          >
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover rounded mb-4" />
            {item.icon}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
