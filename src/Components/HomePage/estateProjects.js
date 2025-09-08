"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dummy from "../../../public/dummy.svg";

const citiesData = {
  Mumbai: [
    {
      id: 1,
      title: "DLF The Westpark",
      location: "Andheri West, Mumbai",
      price: "₹ 4.20 Cr to 9.63 Cr",
      image: dummy,
      link: "/projects/dlf-the-westpark",
    },
    {
      id: 2,
      title: "K Raheja Antares",
      location: "Kanjurmarg West, Mumbai",
      price: "₹ 4.20 Cr to 9.63 Cr",
      image: dummy,
      link: "/projects/k-raheja-antares",
    },
    {
      id: 3,
      title: "Mahindra Marina 64",
      location: "Malad West, Mumbai",
      price: "₹ 9.04 Cr to 14.23 Cr",
      image: dummy,
      link: "/projects/mahindra-marina-64",
    },
  ],
  Bangalore: [],
  Gurgaon: [],
  Pune: [],
  Noida: [],
  Hyderabad: [],
  Thane: [],
  "Navi Mumbai": [],
  Chennai: [],
};

const RealEstateProjects = () => {
  const [activeCity, setActiveCity] = useState("Mumbai");

  const cities = Object.keys(citiesData);

  return (
    <section className="text-center w-7xl mx-auto">
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-black/50 to-transparent"></div>

        <h2
          className="font-second font-medium text-[40px] leading-[120%] tracking-[0.02em] uppercase text-center 
               bg-gradient-to-b from-[#fdf094] to-[#b77d2b] bg-clip-text text-transparent whitespace-nowrap"
        >
          Hot Selling Real Estate Projects <br /> Delhi NCR
        </h2>

        <div className="flex-1 h-px bg-gradient-to-l from-black/50 to-transparent"></div>
      </div>

      <p className="text-gray-600 mt-4">
        Discover the Best Opportunities in Residential & Commercial Spaces
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => setActiveCity(city)}
            className={`px-4 py-2 rounded-md border ${
              activeCity === city
                ? "bg-black text-white"
                : "bg-white text-black"
            } cursor-pointer transition`}
          >
            {city}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {citiesData[activeCity]?.length > 0 ? (
          citiesData[activeCity].map((project) => (
            <article
              key={project.id}
              className="text-left shadow-lg rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-64 object-cover"
                priority
              />
              <div className="p-4">
                <h4 className="text-lg font-bold">{project.title}</h4>
                <p className="text-gray-600">{project.location}</p>
                <p className="text-purple-700 font-semibold mt-2">
                  {project.price}
                </p>
                <Link
                  href={project.link}
                  className="text-black font-medium flex items-center mt-3 hover:underline"
                >
                  Read more <span className="ml-2">›</span>
                </Link>
              </div>
            </article>
          ))
        ) : (
          <p className="col-span-3 text-gray-500">
            No projects available for {activeCity}.
          </p>
        )}
      </div>

      {/* View All Button */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/projects"
          className="bg-gradient-to-b from-[#fdf094] to-[#b77d2b] border border-white rounded-[4px] px-[20px] py-[8px] w-[167px] h-[43px] flex items-center justify-center text-black font-semibold shadow-md hover:opacity-90 cursor-pointer"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default RealEstateProjects;
