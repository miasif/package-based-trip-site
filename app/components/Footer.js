import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 dark:bg-gray-900">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">About Us</h3>
            <p className="text-gray-400 dark:text-gray-300">
              We are a travel agency offering custom tour packages tailored to
              your dreams. Let us make your next vacation unforgettable.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="text-gray-400 dark:text-gray-300">
              <li>
                <a
                  href="#home"
                  className="hover:text-blue-400 dark:hover:text-blue-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-400 dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#featured-packages"
                  className="hover:text-blue-400 dark:hover:text-blue-500"
                >
                  Packages
                </a>
              </li>
              <li>
                <a
                  href="#inquiry-form"
                  className="hover:text-blue-400 dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
            <p className="text-gray-400 dark:text-gray-300">
              <strong>Email:</strong> myluxarytrip@gmail.com
            </p>
            <p className="text-gray-400 dark:text-gray-300">
              <strong>Phone:</strong> <br /> 01886 540521 <br /> 01742 671921
            </p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-500"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-500"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/luxarytrip/?__pwa=1"
                className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-500"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-400 dark:hover:text-blue-500"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-6">
          <p className="text-gray-400 dark:text-gray-300 text-sm">
            &copy; 2025 Luxury Tours. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
