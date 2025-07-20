import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      step: "1. Input Your Topic",
      desc: "Start by entering your content idea or target keyword.",
    },
    {
      step: "2. Let Abun Work",
      desc: "The AI engine drafts content optimized for clarity and engagement.",
    },
    {
      step: "3. Review & Publish",
      desc: "Edit if needed and push it live in minutes.",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid sm:grid-cols-3 gap-8 text-left mt-10">
          {steps.map((step, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition transform hover:-translate-y-1">
              <h4 className="text-lg font-semibold">{step.step}</h4>
              <p className="text-gray-600 mt-2">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;