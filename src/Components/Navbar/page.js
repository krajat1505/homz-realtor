import Image from "next/image";
import Link from "next/link";
import homeIcon from "../../../public/homz_icon.svg";
import downIcon from "../../../public/down.svg";

const navLinks = [
  { name: "Home", href: "/", title: "Go to Home Page" },
  { name: "About Us", href: "/about-us", title: "Learn more About Us" },
  {
    name: "Properties",
    href: "/properties",
    title: "Browse Available Properties",
    icon: downIcon,
  },
];

const Navbar = () => {
  return (
    <header className="bg-black text-white">
      {/* Top Promo Banner */}
      <div className="flex justify-center items-center gap-4 p-2 text-center">
        <p className="text-sm font-normal">
          Exclusive Luxury Properties in Gurgaon – Invest in Your Future Today
        </p>
        <Link
          href="/listings"
          title="View Property Listings"
          className="text-lg font-semibold underline hover:text-gray-300 transition"
        >
          View Listings →
        </Link>
      </div>

      {/* Main Navbar */}
      <nav className="border-t border-l border-r" aria-label="Main Navigation">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" title="Go to Home">
            <Image
              src={homeIcon}
              alt="Homz Luxury Properties Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-6">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-1">
                <Link
                  href={link.href}
                  title={link.title}
                  className="hover:text-gray-300 transition flex items-center gap-1"
                >
                  {link.name}
                  {link.icon && (
                    <Image
                      src={link.icon}
                      alt="Dropdown Icon"
                      width={16}
                      height={16}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
