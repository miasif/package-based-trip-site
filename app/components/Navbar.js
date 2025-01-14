"use client";
import Image from "next/image";
import { useState } from "react";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Brand */}
        <div className="flex items-center">
          <a
            href="#home"
            className="font-medium text-2xl hover:text-gray-500 dark:hover:text-gray-300 transition"
          >
            <Image
              src={"/assets/luxary-logo.jpg"}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </a>
        </div>

        {/* Menu Button (Hamburger) */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 transition-transform duration-300"
            strokeWidth="2"
            // Dynamic stroke color for light and dark mode
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center lg:space-x-8`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center">
            <NavItem label="Home" href="#home" />
            <NavItem label="About" href="#about" />
            <NavItem label="Packages" href="#featured-packages" />
            <NavItem label="Gallery" href="#destinations" />
            <NavItem label="Contact" href="#inquiry-form" />
          </ul>

          {/* Theme Toggle Button for Mobile */}
          <div className="lg:hidden mt-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Theme Toggle Button for Desktop */}
        <div className="hidden lg:block">
          <ThemeToggle />
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
