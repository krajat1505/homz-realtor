"use client";

import Image from "next/image";
import dummy from "../../../../public/plots.svg";

const testimonials = [
  {
    id: 1,
    name: "Arush Deshmukh",
    role: "Marketing Manager, Happy Living Realty",
    image: dummy,
    text: "From initial consultation to closing, the journey was smooth and transparent. Their commitment to understanding my needs and providing tailored solutions was exceptional...",
    rating: 5,
  },
  {
    id: 2,
    name: "Pooja Jain",
    role: "Marketing Manager, Green Spaces Realty",
    image: dummy,
    text: "From initial consultation to closing, the journey was smooth and transparent. Their commitment to understanding my needs and providing tailored solutions was exceptional...",
    rating: 5,
  },
  {
    id: 3,
    name: "Dr. Narayan Deshmukh",
    role: "Financial Advisor, Urban Elite Residences",
    image: dummy,
    text: "From initial consultation to closing, the journey was smooth and transparent. Their commitment to understanding my needs and providing tailored solutions was exceptional...",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[1px] w-60 bg-gradient-to-r from-[#b77d2b] to-transparent" />
          <h2 className="text-2xl md:text-3xl font-semibold text-[#cea44e] uppercase">
            Customer Testimonials
          </h2>
          <span className="h-[1px] w-60 bg-gradient-to-l from-[#b77d2b] to-transparent" />
        </div>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-3 gap-12">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-black text-white rounded-lg px-6 py-8 shadow-md flex flex-col justify-between"
          >
            <div className="bg-[#1f1f1f] rounded-md px-4 py-8 mb-6">
              <div className="flex text-[#cea44e] mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-sm text-gray-200 leading-relaxed">
                {item.text}{" "}
                <span className="text-[#cea44e] cursor-pointer">Read more</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
