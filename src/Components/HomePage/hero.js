import Image from "next/image";
import icon1 from "../../../public/ion_home-outline.svg";
import icon2 from "../../../public/teenyicons_search-property-outline.svg";
import icon3 from "../../../public/grommet-icons_projects.svg";
import icon4 from "../../../public/Frame.svg";

import logo1 from "../../../public/image 790.svg";
import logo2 from "../../../public/image 791.svg";
import logo3 from "../../../public/image 794.svg";
import logo4 from "../../../public/logoipsum-286 1.svg";
import logo5 from "../../../public/logoipsum-345 1.svg";
import logo6 from "../../../public/logoipsum-329 1.svg";
import logo7 from "../../../public/logoipsum-336 1.svg";

const properties = [
  { icon: icon1, text: "Buy Property" },
  { icon: icon2, text: "Rent Property" },
  { icon: icon4, text: "Plots & Land" },
  { icon: icon3, text: "Projects" },
  { icon: icon4, text: "Commercials" },
];

const companies = [
  { logo: logo1, alt: "Company Partner 1" },
  { logo: logo2, alt: "Company Partner 2" },
  { logo: logo3, alt: "Company Partner 3" },
  { logo: logo4, alt: "Company Partner 4" },
  { logo: logo5, alt: "Company Partner 5" },
  { logo: logo6, alt: "Company Partner 6" },
  { logo: logo7, alt: "Company Partner 7" },
];

const Hero = () => {
  return (
    <section>
      <div
        className="relative flex flex-col gap-6 justify-center items-center py-10 border border-white bg-[url('/bgHome.svg')] bg-cover bg-center"
        aria-label="Hero Section: Explore Homes and Properties"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.75)] to-[rgba(0,0,0,0.9)]" />

        <div className="relative z-10 flex flex-col gap-6 items-center">
          <header>
            <h1 className="text-[#fff] font-second font-medium text-[56px] uppercase text-center">
              Homes You Can Trust, In The <br />
              <span className="font-second font-medium leading-[120%] tracking-[0.02em] uppercase text-center text-transparent bg-clip-text bg-gradient-to-b from-[#fdf094] to-[#b77d2b]">
                City You Love.
              </span>
            </h1>

            <p className="font-main font-normal text-[16px] text-center text-white mt-4">
              Buy, Rent, or Sell—discover verified listings, expert guidance,
              and properties that feel like home.
            </p>
          </header>

          <button
            className="px-6 py-3 bg-white font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300 cursor-pointer"
            aria-label="Talk to a Local Property Expert"
          >
            TALK TO A LOCAL EXPERT
          </button>

          <nav aria-label="Property Options">
            <ul className="flex gap-4 flex-wrap justify-center">
              {properties.map((property, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 border border-[#adadad] rounded-[4px] px-[22px] py-[16px] w-[238px] h-[80px] shadow-md bg-black/30 backdrop-blur-sm"
                >
                  <Image src={property.icon} alt={property.text} />
                  <span className="text-white text-xl font-bold">
                    {property.text}
                  </span>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-black py-8 flex flex-col gap-4 rounded-b-3xl w-full ">
        <p className="text-center text-white text-lg font-medium">
          Trusted by the world&rsquo;s best companies – building credibility
          through partnerships.
        </p>
        <div className="flex gap-12 items-center justify-center flex-wrap">
          {companies.map((company, index) => (
            <Image
              key={index}
              src={company.logo}
              alt={company.alt}
              width={120}
              height={60}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
