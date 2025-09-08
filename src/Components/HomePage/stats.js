"use client";
import React from "react";

const Stats = () => {
  const stats = [
    { value: "25500+", label: "Happy Customers" },
    { value: "45 Million Sq.Ft.", label: "Area Sold" },
    { value: "500+", label: "Skilled Professionals" },
    { value: "750+", label: "Channel Associates" },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <span className="h-12 w-[2px] bg-yellow-600 mr-4"></span>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#cea44e]">
                {stat.value}
              </h2>

              <p className="text-gray-300 text-sm md:text-base">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
