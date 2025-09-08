"use client";

import Link from "next/link";
import buy from "../../../public/buy.png";
import rent from "../../../public/rent.png";
import plots from "../../../public/plots.svg";
import projects from "../../../public/projects.png";
import commercial from "../../../public/commercial.png";
import Image from "next/image";

const LatestProject = () => {
  const properties = [
    {
      title: "BUY PROPERTY",
      image: buy,
      href: "",
    },
    {
      title: "RENT PROPERTY",
      image: rent,
      href: "",
    },
    {
      title: "PLOTS & LAND",
      image: plots,
      href: "",
    },
    {
      title: "PROJECTS",
      image: projects,
      href: "",
    },
    {
      title: "COMMERCIAL",
      image: commercial,
      href: "",
    },
  ];

  return (
    <div className=" w-7xl mx-auto text-center">
      <div>
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-black/50 to-transparent "></div>

          <h2
            className="font-second font-medium text-[40px] leading-[120%] tracking-[0.02em] uppercase text-center 
               bg-gradient-to-b from-[#fdf094] to-[#b77d2b] bg-clip-text text-transparent whitespace-nowrap"
          >
            Discover The Latest Projects
          </h2>

          <div className="flex-1 h-px bg-gradient-to-l from-black/50 to-transparent"></div>
        </div>

        <p className="text-gray-600 mt-4 mb-8">
          Explore off-plan and upcoming properties before they hit the
          mainstream market.
        </p>
      </div>
      <div className="flex gap-6">
        {properties.map((item) => (
          <Link key={item.title} href={""}>
            <Image src={item.image} alt={item.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LatestProject;
