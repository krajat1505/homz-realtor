import Image from "next/image";
import Link from "next/link";
import homeIcon from "../../../public/homz_icon.svg";

const footerLinks = [
  { name: "Home", href: "/", title: "Go to Home Page" },
  { name: "Projects", href: "/projects", title: "Explore Our Projects" },
  { name: "Developers", href: "/developers", title: "Meet Our Developers" },
  { name: "Contact", href: "/contact", title: "Get in Touch with Us" },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between flex-wrap pt-12 gap-12">
          <div className="max-w-md">
            <Link href="/" title="Go to Home">
              <Image
                src={homeIcon}
                alt="Homz Luxury Properties Logo"
                width={100}
                height={100}
                priority
              />
            </Link>
            <p className="font-main font-normal text-[14px] leading-[150%] text-gray-300 mt-4">
              Explore a curated selection of properties across the city. Find
              your dream home, investment property, or a space that suits your
              lifestyle.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="flex gap-12 flex-wrap">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    title={link.title}
                    className="hover:text-gray-300 transition text-[14px]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* Bottom Section */}
        <p className="text-center font-main font-normal text-[14px] leading-[150%] text-gray-400 py-2">
          © 2025 Homz Realtor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
