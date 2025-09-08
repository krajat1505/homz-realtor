import Testimonials from "@/Components/CommonComponents/Testimonials/page";
import RealEstateProjects from "@/Components/HomePage/estateProjects";
import Hero from "@/Components/HomePage/hero";
import LatestProject from "@/Components/HomePage/latestProject";
import Stats from "@/Components/HomePage/stats";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-14">
      <Hero />
      <RealEstateProjects />
      <LatestProject />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default page;
