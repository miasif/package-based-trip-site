const WelcomeHero = () => {
  return (
    <section
      id="home"
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
          className="bg-transparent text-gray-200 py-3 px-6 rounded-full border-2 border-gray-200 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-transparent dark:text-white dark:border-white dark:hover:bg-gray-200 dark:hover:text-black"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default WelcomeHero;
