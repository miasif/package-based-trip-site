import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold flex items-center">
          <Image
            src="/assets/images/about/luxary_logo.png"
            alt="Luxury Tours Logo"
            width={50} // Adjust size
            height={20}
            className="mr-2"
          />
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="#education" className="hover:text-gray-400">
            Education
          </Link>
          <Link href="#skills" className="hover:text-gray-400">
            Skills
          </Link>
          <Link href="#experience" className="hover:text-gray-400">
            Experience
          </Link>
          <Link href="#profiles" className="hover:text-gray-400">
            Profile
          </Link>
          <Link href="#portfolio" className="hover:text-gray-400">
            Portfolio
          </Link>
          <Link href="#clients" className="hover:text-gray-400">
            Clients
          </Link>
          <Link href="#contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white hover:text-gray-400 focus:outline-none">
            <i className="fa fa-bars text-2xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
