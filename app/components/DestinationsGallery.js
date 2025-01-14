"use client";

import Image from "next/image";

const DestinationsGallery = () => {
  return (
    <section
      id="destinations"
      className="py-20 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">
          Explore Our Destinations
        </h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Destination 1 */}
          <div className="relative group">
            <Image
              src="/assets/destination1.jpeg"
              alt="Destination 1"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
          </div>

          {/* Destination 2 */}
          <div className="relative group">
            <Image
              src="/assets/destination2.jpeg"
              alt="Destination 2"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
          </div>

          {/* Destination 3 */}
          <div className="relative group">
            <Image
              src="/assets/destination3.jpeg"
              alt="Destination 3"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
          </div>

          {/* Destination 4 */}
          <div className="relative group">
            <Image
              src="/assets/destination4.jpeg"
              alt="Destination 4"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
          </div>

          {/* Destination 5 */}
          <div className="relative group">
            <Image
              src="/assets/destination5.jpeg"
              alt="Destination 5"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
          </div>

          {/* Destination 6 */}
          <div className="relative group">
            <Image
              src="/assets/destination6.jpg"
              alt="Destination 6"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
          </div>

          {/* Destination 7 */}
          <div className="relative group">
            <Image
              src="/assets/destination7.jpg"
              alt="Destination 7"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
          </div>

          {/* Destination 8 */}
          <div className="relative group">
            <Image
              src="/assets/destination8.jpg"
              alt="Destination 8"
              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105"
              width={400} // Set specific width
              height={250} // Set specific height
            />
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity">
              <h4 className="text-white text-lg font-semibold">Tokyo, Japan</h4>
            </div> */}
          </div>

          {/* Additional Destinations can be added here */}
        </div>
      </div>
    </section>
  );
};

export default DestinationsGallery;
