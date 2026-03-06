import { motion } from "framer-motion";

const brands = [
  "MAUER", "ABUS", "CISA", "DOMUS",
  "SILCA", "MUL-T-LOCK", "BKS", "ISEO",
  "KALE", "ABLOY", "MOTTURA", "YALE",
  "EVVA", "WINKHAUS", "SECUREMME", "POTENT",
];

const EquipmentSection = () => {
  const doubled = [...brands, ...brands];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Εξοπλισμός{" "}
            <span className="text-gradient-red">Υψηλής Ποιότητας</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Χρησιμοποιούμε τεχνολογία αιχμής από τους κορυφαίους κατασκευαστές παγκοσμίως.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary to-transparent z-10" />

        <div className="flex animate-scroll w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 w-44 h-20 bg-background border border-border rounded-xl flex items-center justify-center hover:border-primary/40 transition-colors group shadow-card-light"
            >
              <span className="text-muted-foreground font-bold text-sm tracking-wider group-hover:text-primary transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;
