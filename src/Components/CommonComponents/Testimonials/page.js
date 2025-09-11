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
    <section className="max-w-7xl mx-auto px-4 sm:px-6  ">
      <div className="flex items-center justify-center gap-4 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-black/50 to-transparent"></div>

        <h2
          id="testimonials-title"
          className="font-second font-medium text-2xl sm:text-3xl md:text-[40px] leading-[120%] tracking-[0.02em] uppercase text-center 
               bg-gradient-to-b from-[#fdf094] to-[#b77d2b] bg-clip-text text-transparent"
        >
          Customer Testimonials
        </h2>

        <div className="flex-1 h-px bg-gradient-to-l from-black/50 to-transparent"></div>
      </div>

      <p className="text-gray-600 mt-4 mb-10 text-center text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <article
            key={item.id}
            className="bg-black text-white rounded-lg px-6 py-8 shadow-md flex flex-col justify-between"
          >
            <div className="bg-[#1f1f1f] rounded-md px-4 py-6 mb-6">
              <div
                className="flex text-[#cea44e] mb-4"
                aria-label={`Rating: ${item.rating} out of 5`}
              >
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                {item.text}{" "}
                <button
                  type="button"
                  className="text-[#cea44e] underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-[#cea44e] cursor-pointer"
                >
                  Read more
                </button>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={`Photo of ${item.name}`}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm md:text-base">
                  {item.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-400">{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
