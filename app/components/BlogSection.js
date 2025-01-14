"use client";

import Image from "next/image";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Latest Articles & Updates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Blog Post 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/assets/blog1.jpg"
              alt="Blog Post 1"
              width={600} // Specify desired width
              height={224} // Specify desired height
              className="w-full h-56 object-cover"
              priority // Ensures the image is loaded quickly if it's above the fold
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Exploring the Best Travel Destinations for 2025
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Discover the top destinations for 2025 and plan your next
                adventure with our expert guide. From exotic beaches to cultural
                cities, find your dream vacation.
              </p>
              <a href="#blog1" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/assets/blog2.jpg"
              alt="Blog Post 2"
              width={600} // Specify desired width
              height={224} // Specify desired height
              className="w-full h-56 object-cover"
              priority // Ensures the image is loaded quickly if it's above the fold
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                How to Customize Your Travel Package for a Perfect Trip
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Want to create the ultimate travel experience? Learn how you can
                customize every detail of your travel package to suit your
                needs.
              </p>
              <a href="#blog2" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/assets/blog3.jpg"
              alt="Blog Post 3"
              width={600} // Specify desired width
              height={224} // Specify desired height
              className="w-full h-56 object-cover"
              priority // Ensures the image is loaded quickly if it's above the fold
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Top 5 Travel Hacks for Stress-Free Vacations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Avoid the common travel hassles with our expert tips and hacks
                to make your next vacation smooth and stress-free.
              </p>
              <a href="#blog3" className="text-blue-500 hover:underline">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
