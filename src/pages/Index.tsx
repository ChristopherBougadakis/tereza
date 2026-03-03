import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import FunFactBanner from "@/components/FunFactBanner";
import PartnersSection from "@/components/PartnersSection";
import InstagramSection from "@/components/InstagramSection";
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
        <PartnersSection />
        <FunFactBanner />
        <InstagramSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default Index;
