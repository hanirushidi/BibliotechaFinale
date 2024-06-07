import BestSelling from "@/components/LandingPage/BestSelling";
import Faq from "@/components/LandingPage/Faq";
import Footer from "@/components/LandingPage/Footer";
import HeroSection from "@/components/LandingPage/HeroSection";
import VerticalReview from "@/components/LandingPage/VerticalReview";

const HomePage = () => {
  return (
    <>
      <div className="selection:bg-[#ccf0d3]">
        <HeroSection />
        <BestSelling />
        <VerticalReview />
        <Faq />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
