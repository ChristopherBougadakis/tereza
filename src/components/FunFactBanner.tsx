import { motion } from "framer-motion";
import { AlertTriangle, Phone } from "lucide-react";

const FunFactBanner = () => {
  return (
    <section className="py-16 bg-secondary border-y border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <AlertTriangle className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
            Το ξέρατε;
          </h3>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            <strong className="text-foreground">2 στις 3 ληστείες</strong>{" "}
            συμβαίνουν σε πόρτες πρώτου ορόφου. Αναβαθμίστε την ασφάλεια του
            σπιτιού σας σήμερα!
          </p>
          <a
            href="tel:+306944788286"
            className="inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-red"
          >
            <Phone className="w-5 h-5" />
            Καλέστε για Αναβάθμιση
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FunFactBanner;
