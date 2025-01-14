import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Our Travel Agency
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            At <span className="text-blue-500 font-semibold">ExploreWorld</span>
            , we offer carefully curated tour packages to breathtaking
            destinations worldwide. Customize your dream vacation with us for an
            unforgettable experience!
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          {/* About Content */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 px-4">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Why Choose Us?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We specialize in creating tailor-made tours that cater to your
              preferences. From scenic beaches to cultural landmarks, our
              packages include everything you need for a hassle-free journey.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
              <li>Exclusive tour packages for every budget.</li>
              <li>Personalized itineraries for unique experiences.</li>
              <li>Dedicated support to ensure a seamless trip.</li>
            </ul>
            <a
              href="#inquiry-form"
              className="inline-block mt-6 bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300"
            >
              Customize Your Package
            </a>
          </div>

          {/* About Image */}
          <div className="w-full lg:w-1/2 px-4">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/assets/about.jpg" // Replace with your image path
                alt="Travel Agency"
                width={600} // Specify width
                height={400} // Specify height
                className="w-full h-auto" // Tailwind utilities for responsiveness
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
