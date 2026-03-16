import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import EquipmentSection from "@/components/EquipmentSection";
import ClientsSection from "@/components/ClientsSection";
import ReviewsSection from "@/components/ReviewsSection";
import FunFactBanner from "@/components/FunFactBanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <WhyUsSection />
        <EquipmentSection />
        <ClientsSection />
        <ReviewsSection />
        <FunFactBanner />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Index;
