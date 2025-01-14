import Image from "next/image";

const FeaturedPackages = () => {
  return (
    <section
      id="featured-packages"
      className="py-20 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-50 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">
          Featured Travel Packages
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Explore our curated selection of the best travel packages designed to
          offer unforgettable experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Package 2: Cox's Bazar */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/assets/coxs-bazar.jpeg"
                alt="Cox's Bazar"
                className="w-full h-56 object-cover"
                width={300}
                height={100}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  5 Night & 3 Days at Cox's Bazar
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Discover the longest unbroken sandy beach in the world. Enjoy
                  the sunsets and vibrant beach culture of Cox's Bazar.
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-white mb-6">
                  13000Tk per person
                </p>
                <a
                  href="https://docs.google.com/forms/d/1z5QRNlW_U4m-aJ3vNz8zLERcgbDlMQBzhMXcMuaYvFw/viewform?edit_requested=true"
                  target="_blank"
                  className="inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  book now
                </a>
              </div>
            </div>
          </div>

          {/* Package 3: Sundarbans */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/assets/sundarban.jpeg"
                alt="Sundarbans"
                className="w-full h-56 object-cover"
                width={600}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  4 Days in the Sundarbans
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Explore the world's largest mangrove forest, home to the
                  majestic Royal Bengal Tiger and diverse wildlife.
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-white mb-6">
                  10000Tk per person
                </p>
                <div className="text-gray-500 dark:text-gray-400 text-xl font-semibold italic">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>

          {/* Package 4: Sylhet */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/assets/sylhet.jpeg"
                alt="Sylhet"
                className="w-full h-56 object-cover"
                width={600}
                height={400}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  6 Days in Sylhet
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Experience the serene landscapes, tea gardens, and hills of
                  Sylhet. A peaceful retreat amidst nature's beauty.
                </p>
                <p className="text-lg font-bold text-gray-800 dark:text-white mb-6">
                  5000Tk per person
                </p>
                <div className="text-gray-500 dark:text-gray-400 text-xl font-semibold italic">
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
