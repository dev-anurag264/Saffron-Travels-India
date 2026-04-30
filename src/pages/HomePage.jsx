import HeroSection from "../components/sections/HeroSection";
import DestinationMarquee from "../components/sections/DestinationMarquee";
import StatsSection from "../components/sections/StatsSection";
import FeaturedDestinations from "../components/sections/FeaturedDestinations";
import TripTypeGrid from "../components/sections/TripTypeGrid";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import PopularPackages from "../components/sections/PopularPackages";
import TravelInspiration from "../components/sections/TravelInspiration";
import Testimonials from "../components/sections/Testimonials";
import CTABanner from "../components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DestinationMarquee />
      <FeaturedDestinations />

      <TripTypeGrid />
      <StatsSection />
      <WhyChooseUs />
      <PopularPackages />
      <TravelInspiration />
      <Testimonials />
      <CTABanner />
    </>
  );
}
