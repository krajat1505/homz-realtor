"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import homeIcon from "../../../public/homz_icon.svg";
import downIcon from "../../../public/down.svg";
import HamburgerIcon from "../../../public/HamburgerIcon.svg";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="bg-black text-white">
      <div className="flex sm:justify-center justify-between gap-2 sm:gap-4 p-2 text-sm md:text-base items-center">
        <p className="w-[54%] sm:w-auto">
          Exclusive Luxury Properties in Gurgaon – Invest in Your Future Today
        </p>
        <Link
          href="/listings"
          title="View Property Listings"
          className="text-sm md:text-lg font-semibold hover:text-gray-300 transition"
        >
          View Listings →
        </Link>
      </div>

      <nav className="border-t border-l border-r">
        <div className="flex justify-between items-center px-4 sm:px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" title="Go to Home">
            <Image
              src={homeIcon}
              alt="Homz Luxury Properties Logo"
              width={100}
              height={100}
              priority
            />
          </Link>

          <ul className="hidden md:flex gap-6">
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

          <button
            className="md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <Image src={HamburgerIcon} alt="Open Menu" width={28} height={28} />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-black text-white transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5.5 border-b border-white">
          <Image src={homeIcon} alt="Logo" width={80} height={80} />
          <button
            className="text-xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            ×
          </button>
        </div>

        <nav className="mt-6 flex flex-col space-y-6 px-6 text-lg font-medium">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              title={link.title}
              className="hover:text-gray-300 transition flex items-center gap-2"
              onClick={() => setIsOpen(false)}
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
          ))}
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
