const WelcomeHero = () => {
  return (
    <section
      id="welcome-hero"
      className="relative h-screen text-white dark:bg-gray-800 dark:text-white"

      //style={{
      //         backgroundImage: "url('/assets/wecome-hero.mp4')", // Set your image path here
      //       }}
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/wecome-hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-60"></div>

      {/* Content */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center relative z-10 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Discover Your Next Adventure
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Explore exclusive tour packages and design your perfect vacation with
          personalized itineraries.
        </p>
        <a
          href="https://docs.google.com/forms/d/1z5QRNlW_U4m-aJ3vNz8zLERcgbDlMQBzhMXcMuaYvFw/viewform?edit_requested=true"
          target="_blank"
          className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full hover:bg-blue-600 transition duration-300"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default WelcomeHero;
