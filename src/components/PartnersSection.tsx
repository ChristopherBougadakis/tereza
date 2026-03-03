import { motion } from "framer-motion";
import { GridPattern, NoiseTexture } from "./BackgroundDecorations";

// Placeholder partner logos — replace with real logos (upload them via chat!)
const partners = [
  "CISA", "KALE", "ABLOY", "MOTTURA", "ISEO",
  "MUL-T-LOCK", "YALE", "DIERRE", "EVVA", "WINKHAUS",
  "SECUREMME", "POTENT",
];

const PartnersSection = () => {
  // Double the list for seamless infinite scroll
  const doubled = [...partners, ...partners];

  return (
    <section className="py-20 bg-dark-section relative overflow-hidden">
      <GridPattern variant="dark" />
      <NoiseTexture />
      <div className="container relative z-10 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Συνεργαζόμαστε με τους{" "}
            <span className="text-gradient-red">Κορυφαίους</span>
          </h2>
          <p className="text-[hsl(0,0%,55%)] text-lg max-w-xl mx-auto">
            Αποκλειστικός συνεργάτης κορυφαίων brands ασφαλείας
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(0,0%,6%)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(0,0%,6%)] to-transparent z-10" />

        <div className="flex animate-[scroll_30s_linear_infinite] w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-4 w-48 h-24 bg-[hsl(0,0%,10%)] border border-[hsl(0,0%,16%)] rounded-xl flex items-center justify-center hover:border-primary/40 transition-colors group"
            >
              <span className="text-[hsl(0,0%,40%)] font-bold text-lg tracking-wider group-hover:text-primary transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
