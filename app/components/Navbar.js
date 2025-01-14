// components/Navbar.js
import Image from "next/image";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Brand */}
        <div className="flex items-center">
          <a
            href="index.html"
            className="text-white font-medium text-2xl hover:text-gray-200 focus:text-gray-200 transition"
          >
            <Image
              src={"/assets/luxary-logo.jpg"}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="text-yellow-500">.</span>
          </a>
        </div>

        {/* Menu */}
        <div className="hidden lg:flex flex-col lg:flex-row lg:items-center lg:space-x-8">
          <ul className="flex flex-col lg:flex-row lg:space-x-8 text-center">
            <NavItem label="Home" href="#home" isActive />
            <NavItem label="New Arrival" href="#new-arrivals" />
            <NavItem label="Features" href="#feature" />
            <NavItem label="Blog" href="#blog" />
            <NavItem label="Contact" href="#newsletter" />
          </ul>
        </div>

        {/* Theme Toggle Button */}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
