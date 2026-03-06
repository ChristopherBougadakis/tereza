import { motion } from "framer-motion";

const allClients = [
  "Karatzis S.A.", "Interamerican", "Groupama", "ΕΛΤΑ", "ΚΕΝ", "El Al", "Marmaras",
  "Πανεπιστήμιο Κρήτης", "ΕΡΤ",
  "Zeus Hotels", "Hotel Akti", "Lato Boutique Hotel", "Theseus Beach Village",
  "Λητώ", "Stergiou", "Mathioudakis", "Κρητικός Φούρνος", "Απλάδα", "Sports Point",
];

const ClientsSection = () => {
  const row1 = [...allClients, ...allClients];
  const row2 = [...allClients.slice().reverse(), ...allClients.slice().reverse()];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-24 bg-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-4"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Κορυφαίοι{" "}
          <span className="text-gradient-red">Πελάτες</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Η εμπιστοσύνη των κορυφαίων είναι η καλύτερη διαφήμισή μας.
        </p>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="relative w-full mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll w-max">
          {row1.map((name, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 mx-3 w-52 h-20 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/40 hover:shadow-card-light transition-all group"
            >
              <span className="text-muted-foreground font-bold text-sm tracking-wider group-hover:text-primary transition-colors">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-reverse w-max">
          {row2.map((name, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 mx-3 w-52 h-20 bg-card border border-border rounded-xl flex items-center justify-center hover:border-primary/40 hover:shadow-card-light transition-all group"
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

export default ClientsSection;
