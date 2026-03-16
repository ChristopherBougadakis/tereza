import { motion } from "framer-motion";
import { Lock, Car, Footprints, KeyRound, Shield, Home, Wrench, Settings, Watch, Umbrella, Zap, DoorOpen } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Υπηρεσίες Κλειδαρά",
    items: [
      { icon: Lock, text: "Αλλαγή κωδικού κλειδαριάς (Lock rekeying)" },
      { icon: KeyRound, text: "Αντιγραφή κλειδιών αυτοκινήτου" },
      { icon: Home, text: "Αντιγραφή κλειδιών κτιρίου" },
      { icon: Settings, text: "Παντογραφικά κλειδιά" },
      { icon: Lock, text: "Αντιγραφή πολυσημειακών κλειδιών" },
      { icon: KeyRound, text: "Αντιγραφή tubular κλειδιών" },
      { icon: Lock, text: "Αντιγραφή κωδικοποιημένων κλειδιών" },
      { icon: KeyRound, text: "Αντιγραφή standard κλειδιών" },
    ],
  },
  {
    title: "Εγκαταστάσεις & Επισκευές",
    items: [
      { icon: Wrench, text: "Γενικές επισκευές" },
      { icon: DoorOpen, text: "Εγκατάσταση κλειδαριών" },
      { icon: DoorOpen, text: "Εγκατάσταση κλειδαριών πόρτας" },
      { icon: Shield, text: "Κλειδαριές θωρακισμένων πορτών" },
      { icon: Home, text: "Κλειδαριές παραθύρων" },
      { icon: Shield, text: "Άνοιγμα, εγκατάσταση και επισκευή χρηματοκιβωτίων" },
      { icon: Car, text: "Άνοιγμα αυτοκινήτου (Car lockouts)" },
      { icon: DoorOpen, text: "Άνοιγμα κτιρίου (Building lockouts)" },
      { icon: Wrench, text: "Επισκευή υλικού κλειδαριών" },
    ],
  },
  {
    title: "Τεχνολογία & Αξεσουάρ",
    items: [
      { icon: Car, text: "Δημιουργία νέων key fobs" },
      { icon: Zap, text: "Προγραμματισμός ψηφιακών και τηλεχειριστήριων αυτοκινήτου" },
      { icon: Settings, text: "Κοντρόλ αυτοκινήτου-μηχανής-γκαραζόπορτας" },
      { icon: Watch, text: "Μπαταρίες κλειδιών-ρολογιών-παιχνιδιών" },
      { icon: KeyRound, text: "Θήκες σιλικόνης κλειδιών με τηλεχειρισμό" },
      { icon: Footprints, text: "Αξεσουάρ υποδημάτων: κορδόνια, βαφές, καθαριστικά, αδιαβροχοποίηση, πάτοι" },
      { icon: Wrench, text: "Δερμάτινα χερούλια" },
      { icon: Wrench, text: "Κατασκευή-επισκευή δερμάτινων ζωνών" },
      { icon: Umbrella, text: "Μπρελόκ μάρκες αυτοκινήτων, δερμάτινα ζωάκια, δερμάτινες θήκες" },
      { icon: Umbrella, text: "Ομπρέλες" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="text-gradient-red">Υπηρεσίες</span>
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
