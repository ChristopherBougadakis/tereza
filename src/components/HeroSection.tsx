import { Phone, Shield } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />

      <div className="relative container text-center py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/80 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <Shield className="w-4 h-4" />
            29 Χρόνια Εμπειρίας στην Κρήτη
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Κλειδωθήκατε{" "}
            <span className="text-gradient-gold">Απέξω;</span>
            <br />
            Καλέστε μας Αμέσως!
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Άμεση εξυπηρέτηση κλειδαρά σε όλο το Ηράκλειο & την Κρήτη.
            Επαγγελματικές λύσεις ασφαλείας, 24/7.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+306944788286"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-gold text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg shadow-gold animate-pulse-glow hover:opacity-90 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              694 478 82 86
            </a>
            <a
              href="tel:+302810313339"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-primary/40 text-foreground px-8 py-4 rounded-xl font-bold text-lg hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              2810 313 339
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
