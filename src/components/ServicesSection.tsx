import { motion } from "framer-motion";
import { Lock, Car, Warehouse, KeyRound, Shield, Home, Wrench, Settings } from "lucide-react";

const services = [
  { icon: Lock, title: "Αδιάρρηκτες Κλειδαριές & Θωρακισμένες Πόρτες", desc: "Τοποθέτηση κλειδαριών ασφαλείας και θωρακισμένων πορτών τελευταίας τεχνολογίας." },
  { icon: Car, title: "Immobilizer Αυτοκινήτου / Moto", desc: "Προγραμματισμός και επισκευή immobilizer για όλες τις μάρκες." },
  { icon: Warehouse, title: "Τηλεχειριστήρια Γκαραζόπορτας", desc: "Προγραμματισμός τηλεχειριστηρίων για γκαραζόπορτες κάθε τύπου." },
  { icon: KeyRound, title: "Χαμένα Κλειδιά Αυτοκινήτου", desc: "Κατασκευή νέων κλειδιών αυτοκινήτου ακόμα και χωρίς το αρχικό." },
  { icon: Shield, title: "Άνοιγμα Χρηματοκιβωτίων", desc: "Ασφαλές άνοιγμα χρηματοκιβωτίων χωρίς ζημιά." },
  { icon: Home, title: "Αναπαραγωγή Κλειδιών Οικίας", desc: "Ακριβής αναπαραγωγή κλειδιών για κατοικίες και πολυκατοικίες." },
  { icon: Settings, title: "Μετατροπή σε Αναδιπλούμενα", desc: "Μετατροπή κλειδιών σε πρακτικά αναδιπλούμενα flip key." },
  { icon: Wrench, title: "Επισκευή Κλειδαριών", desc: "Επισκευή κλειδαριών παντός τύπου με εγγύηση εργασίας." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Οι <span className="text-gradient-gold">Υπηρεσίες</span> μας
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Πλήρες φάσμα υπηρεσιών κλειδαρά για σπίτι, αυτοκίνητο & επαγγελματικούς χώρους.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
