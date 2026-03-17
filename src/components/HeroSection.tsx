import { Phone, Shield, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-red.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[hsl(0,0%,8%)]/80" />

      <div className="relative container text-center py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/30">
            <Shield className="w-4 h-4" />
            Άμεση Εξυπηρέτηση 24/7
          </div>

          <p className="text-sm md:text-base uppercase tracking-[0.25em] text-white/50 font-semibold mb-4">
            Κλειδαράς Ηρακλείου — από το 1997
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 text-white">
            Παντελής{" "}<span className="text-gradient-red">Λύτινας</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-lg mx-auto mb-10">
            Αντιγραφή κλειδιών · Κλειδαριές ασφαλείας · Immobilizer · Χρηματοκιβώτια
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+306944788286"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-red text-primary-foreground px-10 py-5 rounded-xl font-bold text-lg shadow-red animate-pulse-glow hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              694 478 82 86
            </a>
            <a
              href="tel:+302810313339"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg hover:border-white/60 hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              2810 313 339
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Κονδυλάκη+101,+Ηράκλειο,+Κρήτη,+Ελλάδα&travelmode=driving"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-5 rounded-xl font-bold text-lg hover:border-white/60 hover:bg-white/10 transition-all"
            >
              <MapPin className="w-5 h-5" />
              Οδηγίες
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
