import About from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import DestinationsGallery from "./components/DestinationsGallery";
import FeaturedPackages from "./components/FeaturedPackages";
import Footer from "./components/Footer";
import InquiryForm from "./components/InquiryForm";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import WelcomeHero from "./components/WelcomeHero";
import WhyChooseUs from "./components/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <WelcomeHero />
      <About />
      <FeaturedPackages />
      <Testimonials />
      <DestinationsGallery />
      <WhyChooseUs />
      <InquiryForm />
      <BlogSection />
      <Footer />
    </>
  );
}
