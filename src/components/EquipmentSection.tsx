import { motion } from "framer-motion";
import { Shield, Award, CheckCircle2 } from "lucide-react";

const brands = [
  { name: "MAUER", category: "Premium Security" },
  { name: "ABUS", logo: "/logos/equipment/abus.png", category: "German Engineering" },
  { name: "CISA", logo: "/logos/equipment/cisa.png", category: "Italian Design" },
  { name: "DOMUS", category: "High Security" },
  { name: "SILCA", logo: "/logos/equipment/silca.png", category: "Key Systems" },
  { name: "MUL-T-LOCK", logo: "/logos/equipment/multlock.png", category: "Advanced Locking" },
  { name: "BKS", category: "Professional Grade" },
  { name: "ISEO", category: "Smart Solutions" },
  { name: "KALE", category: "Turkish Excellence" },
  { name: "ABLOY", category: "Finnish Technology" },
  { name: "MOTTURA", category: "Italian Craftsmanship" },
  { name: "YALE", category: "Global Standard" },
  { name: "EVVA", category: "Austrian Precision" },
  { name: "WINKHAUS", category: "Innovation Leader" },
  { name: "SECUREMME", category: "Security Expert" },
  { name: "POTENT", category: "Trusted Protection" },
];

const EquipmentSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-secondary to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2.5 rounded-full text-sm font-bold mb-6 border border-primary/30">
            <Shield className="w-5 h-5" />
            Πιστοποιημένα Brands
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Εξοπλισμός{" "}
            <span className="text-gradient-red">Υψηλής Ποιότητας</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Δουλεύουμε αποκλειστικά με τα κορυφαία brands ασφαλείας παγκοσμίως. 
            Κάθε εγκατάσταση, κάθε κλειδαριά — μόνο από επιλεγμένους κατασκευαστές.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {[
            { icon: Shield, text: "100% Γνήσια Προϊόντα" },
            { icon: Award, text: "Διεθνή Πιστοποιητικά" },
            { icon: CheckCircle2, text: "Εγγύηση Κατασκευαστή" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="font-semibold text-sm">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative"
            >
              <div className="bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:border-primary/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                {brand.logo ? (
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      loading="lazy"
                      className="w-12 h-12 object-contain opacity-80 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="text-foreground font-black text-xl tracking-tight group-hover:text-primary transition-colors">
                      {brand.name}
                    </span>
                  </div>
                )}
                <span className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-3">
                  {brand.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            Κάθε brand επιλέγεται για την αξιοπιστία, την τεχνολογία και τη μακροχρόνια απόδοση του.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EquipmentSection;
