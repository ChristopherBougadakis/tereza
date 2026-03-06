import { motion } from "framer-motion";

const clientCategories = [
  {
    label: "Εταιρείες",
    clients: ["Karatzis S.A.", "Interamerican", "Groupama", "ΕΛΤΑ", "ΚΕΝ", "El Al", "Marmaras"],
  },
  {
    label: "Φορείς",
    clients: ["Πανεπιστήμιο Κρήτης", "ΕΡΤ"],
  },
  {
    label: "Τουρισμός",
    clients: ["Zeus Hotels", "Hotel Akti", "Lato Boutique Hotel", "Theseus Beach Village"],
  },
  {
    label: "Εμπόριο",
    clients: ["Λητώ", "Stergiou", "Mathioudakis", "Κρητικός Φούρνος", "Απλάδα", "Sports Point"],
  },
];

const allClients = clientCategories.flatMap((c) => c.clients);

const ClientsSection = () => {
  const doubled = [...allClients, ...allClients];

  return (
    <section className="py-20 bg-background">
      <div className="container mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Κορυφαίοι{" "}
            <span className="text-gradient-red">Πελάτες</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Η εμπιστοσύνη των κορυφαίων είναι η καλύτερη διαφήμισή μας.
          </p>
        </motion.div>
      </div>

      {/* Client categories grid */}
      <div className="container mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-xl p-6 shadow-card-light"
            >
              <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wider">{cat.label}</h3>
              <ul className="space-y-2">
                {cat.clients.map((client, j) => (
                  <li key={j} className="text-sm text-muted-foreground">{client}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scrolling logo cloud */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex animate-scroll w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-3 w-48 h-16 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors group"
            >
              <span className="text-muted-foreground font-semibold text-xs tracking-wider group-hover:text-primary transition-colors">
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
