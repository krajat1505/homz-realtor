import Image from "next/image";
import dummy from "../../../public/dummy.svg";
import space from "../../../public/space.svg";
import Testimonials from "@/Components/CommonComponents/Testimonials/page";
import Link from "next/link";

const About = () => {
  const listItems = [
    "Sending money to family overseas",
    "Paying for international services",
    "Managing business transactions",
  ];

  return (
    <section className="flex flex-col gap-12 md:gap-16">
      <div className="max-w-7xl mx-auto px-6 pt-8  sm:pt-16 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            className="w-full h-auto rounded-lg object-cover"
            src={dummy}
            alt="About MoneyRateFinder team and services"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 ">
          <div className="flex items-center gap-4 mb-6">
            <h1
              id="about-heading"
              className="text-3xl md:text-4xl font-bold tracking-wide"
            >
              ABOUT US
            </h1>
            <div className=" md:w-[200px] w-[100px] h-px bg-gradient-to-l from-black/50 to-transparent"></div>
          </div>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. Dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>

          <div className="pt-8">
            <button
              aria-label="Contact us now"
              className="w-full sm:w-[220px] h-[48px] rounded-md px-6 py-3 font-medium text-black 
              bg-gradient-to-b from-[#fdf094] to-[#b77d2b] hover:opacity-90 transition cursor-pointer"
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white py-16 px-6  lg:px-28">
        <div className="text-center mb-10 ">
          <h2 className="text-3xl md:text-4xl font-bold">OUR STORY</h2>
          <p className="mt-2 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            variu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-4">
              Every idea starts with a problem. For us, it was the question:
            </p>
            <p className="font-semibold text-lg mb-4">
              “Why is sending money across borders still so complicated and
              costly?”
            </p>
            <p className="mb-4">
              We saw people struggling with hidden charges, confusing processes,
              and a lack of transparency when transferring money abroad. With
              our experience in building financial apps, we set out to create a
              better way.
            </p>
            <p className="mb-6">
              That’s how MoneyRateFinder was born a platform that empowers you
              with real-time comparisons from top remittance providers, saving
              you both time and money.
            </p>

            <button
              className="border border-[#eee] rounded-[4px] px-6 py-3 w-full sm:w-[192px] h-[48px] 
             text-white shadow cursor-pointer hover:bg-gray-200 hover:text-black transition"
            >
              READ MORE
            </button>
          </div>

          <div className="flex justify-center">
            <Image
              src={dummy}
              alt="Our Story"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 ">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
            OUR MISSION
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            variu.
          </p>
        </div>

        <div className="grid md:grid-cols-2  gap-8 items-center">
          <div className="">
            <Image
              src={dummy}
              alt="Our Mission"
              width={550}
              height={488}
              className="rounded-lg"
            />
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">
              Transparency. Convenience. Savings.
            </h3>
            <p className="text-gray-700 mb-6">
              MoneyRateFinder was built to make global remittances fair, simple,
              and reliable. We believe everyone deserves access to competitive
              exchange rates—whether you’re:
            </p>

            <ul className="space-y-3 mb-6">
              <ul className="space-y-3 mb-6">
                {listItems.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </ul>

            <div className="bg-gray-100 p-4 rounded-lg shadow">
              <p className="text-gray-700">
                We’re not just building another finance tool. we’re creating
                solutions that make a real difference in people’s lives.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <Link href="" className="w-full max-w-7xl mx-auto px-4">
        <Image
          src={space}
          alt="Our Mission"
          width={1200}
          height={800}
          className="rounded-lg w-full "
        />
      </Link>
    </section>
  );
};

export default About;
