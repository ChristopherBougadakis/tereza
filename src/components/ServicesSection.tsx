import { motion } from "framer-motion";
import { Lock, Car, Footprints, KeyRound, Shield, Home, Wrench, Settings, Watch, Umbrella, Zap, DoorOpen } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Κλειδαράς & Ασφάλεια",
    items: [
      { icon: DoorOpen, text: "Άνοιγμα θυρών & Lockouts (Οικίας/Επιχείρησης)" },
      { icon: Lock, text: "Αντικατάσταση & Επισκευή κλειδαριών (Standard, Multi-point, Tubular)" },
      { icon: Shield, text: "Εγκατάσταση θωρακισμένων συστημάτων & Window locks" },
      { icon: Home, text: "Άνοιγμα & Επισκευή Χρηματοκιβωτίων" },
    ],
  },
  {
    title: "Αυτοκίνητο & Τεχνολογία",
    items: [
      { icon: Car, text: "Αντιγραφή κλειδιών αυτοκινήτου & μηχανής (Παντογραφικά)" },
      { icon: Zap, text: "Προγραμματισμός Immobilizer & Reprogramming Smart Keys" },
      { icon: KeyRound, text: "Δημιουργία νέων Key Fobs & Επισκευή τηλεχειριστηρίων" },
      { icon: Settings, text: "Τηλεχειριστήρια γκαραζόπορτας" },
    ],
  },
  {
    title: "Accessories & Lifestyle",
    items: [
      { icon: Footprints, text: "Περιποίηση Υποδημάτων: Κορδόνια, βαφές, αδιαβροχοποίηση, ορθοπεδικοί πάτοι" },
      { icon: Wrench, text: "Δερμάτινα Είδη: Κατασκευή/Επισκευή ζωνών & δερμάτινων χερουλιών" },
      { icon: Watch, text: "Μπαταρίες κλειδιών/ρολογιών, μπρελόκ" },
      { icon: Umbrella, text: "Ομπρέλες & λοιπά gadgets" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Οι Υπηρεσίες του{" "}
            <span className="text-gradient-red">Κλειδαρά Παντελή Λυτίνα</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Πλήρες φάσμα υπηρεσιών κλειδαρά για σπίτι, αυτοκίνητο & επαγγελματικούς χώρους.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="bg-card border border-border rounded-2xl p-8 shadow-card-light hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-extrabold mb-6 text-foreground">{cat.title}</h3>
              <ul className="space-y-4">
                {cat.items.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground leading-relaxed">{item.text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/ypiresies"
            className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-8 py-3.5 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-red"
          >
            Δείτε Αναλυτικά τις Υπηρεσίες
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
