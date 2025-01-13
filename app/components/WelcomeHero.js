const WelcomeHero = () => {
  return (
    <section
      id="welcome-hero"
      className="py-20 text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/about/welcome-banner.jpg')", // Set your image path here
      }}
    >
      <div className="container mx-auto text-center">
        <div className="header-text">
          <h2 className="text-white text-4xl font-bold mb-4">
            Welcome to Luxury Tours
          </h2>
          <p className="text-white text-lg mb-6">
            Explore exclusive tour packages and design your perfect vacation
            with personalized itineraries.
          </p>
          <a
            href="/contact" // Update link if needed
            className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default WelcomeHero;
