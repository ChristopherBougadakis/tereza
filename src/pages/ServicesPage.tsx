import { motion } from "framer-motion";
import { Lock, Car, Warehouse, KeyRound, Shield, Home, Wrench, Settings, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

import serviceLocks from "@/assets/service-locks.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceGarage from "@/assets/service-garage.jpg";
import serviceSafe from "@/assets/service-safe.jpg";
import serviceKeys from "@/assets/service-keys.jpg";
import serviceFlip from "@/assets/service-flip.jpg";
import serviceRepair from "@/assets/service-repair.jpg";

const services = [
  {
    icon: Lock,
    title: "Αδιάρρηκτες Κλειδαριές & Θωρακισμένες Πόρτες",
    desc: "Τοποθέτηση κλειδαριών ασφαλείας και θωρακισμένων πορτών τελευταίας τεχνολογίας. Προστατεύουμε το σπίτι σας με τα καλύτερα συστήματα ασφαλείας στην αγορά.",
    details: [
      "Κλειδαριές υψηλής ασφαλείας πολλαπλών σημείων",
      "Θωρακισμένες πόρτες αντοχής σε παραβίαση",
      "Εγκατάσταση από πιστοποιημένους τεχνικούς",
      "Εγγύηση κατασκευαστή σε όλα τα προϊόντα",
    ],
    image: serviceLocks,
  },
  {
    icon: Car,
    title: "Immobilizer Αυτοκινήτου / Moto",
    desc: "Προγραμματισμός και επισκευή immobilizer για όλες τις μάρκες αυτοκινήτων και μοτοσυκλετών. Εξειδικευμένος εξοπλισμός για άμεση λύση.",
    details: [
      "Προγραμματισμός immobilizer όλων των μαρκών",
      "Αντικλεπτικά συστήματα αυτοκινήτου",
      "Επισκευή ηλεκτρονικών κλειδιών",
      "Κλειδιά με transponder",
    ],
    image: serviceCar,
  },
  {
    icon: Warehouse,
    title: "Τηλεχειριστήρια Γκαραζόπορτας",
    desc: "Προγραμματισμός τηλεχειριστηρίων για γκαραζόπορτες κάθε τύπου. Αντικατάσταση χαμένων τηλεχειριστηρίων και εγκατάσταση νέων.",
    details: [
      "Προγραμματισμός τηλεχειριστηρίων",
      "Αντιγραφή κωδικών rolling code",
      "Εγκατάσταση δεκτών και πομπών",
      "Συμβατότητα με όλες τις μάρκες",
    ],
    image: serviceGarage,
  },
  {
    icon: KeyRound,
    title: "Χαμένα Κλειδιά Αυτοκινήτου",
    desc: "Κατασκευή νέων κλειδιών αυτοκινήτου ακόμα και χωρίς το αρχικό κλειδί. Γρήγορη και αξιόπιστη λύση σε κάθε περίπτωση.",
    details: [
      "Κατασκευή κλειδιού χωρίς το αρχικό",
      "Άνοιγμα κλειδωμένου αυτοκινήτου",
      "Αντιγραφή κλειδιών με chip",
      "Υπηρεσία επί τόπου",
    ],
    image: serviceCar,
  },
  {
    icon: Shield,
    title: "Άνοιγμα Χρηματοκιβωτίων",
    desc: "Ασφαλές άνοιγμα χρηματοκιβωτίων χωρίς ζημιά. Αντικατάσταση κωδικών και συντήρηση μηχανισμών ασφαλείας.",
    details: [
      "Άνοιγμα χωρίς καταστροφή",
      "Αλλαγή συνδυασμών",
      "Επισκευή μηχανισμών",
      "Εγκατάσταση νέων χρηματοκιβωτίων",
    ],
    image: serviceSafe,
  },
  {
    icon: Home,
    title: "Αναπαραγωγή Κλειδιών Οικίας",
    desc: "Ακριβής αναπαραγωγή κλειδιών για κατοικίες και πολυκατοικίες. Κλειδιά ασφαλείας, πατενταρισμένα κλειδιά και κοινά κλειδιά.",
    details: [
      "Κλειδιά ασφαλείας υψηλής ακρίβειας",
      "Πατενταρισμένα κλειδιά",
      "Κλειδιά πολυκατοικίας",
      "Κλειδιά γραφείων και αποθηκών",
    ],
    image: serviceKeys,
  },
  {
    icon: Settings,
    title: "Μετατροπή σε Αναδιπλούμενα Κλειδιά",
    desc: "Μετατροπή κλειδιών σε πρακτικά αναδιπλούμενα flip key. Εξοικονόμηση χώρου και μοντέρνα εμφάνιση.",
    details: [
      "Flip key για αυτοκίνητα",
      "Flip key για μοτοσυκλέτες",
      "Πολλαπλά σχέδια θήκης",
      "Ενσωμάτωση τηλεχειρισμού",
    ],
    image: serviceFlip,
  },
  {
    icon: Wrench,
    title: "Επισκευή Κλειδαριών Παντός Τύπου",
    desc: "Επισκευή κλειδαριών παντός τύπου με εγγύηση εργασίας. Αντικατάσταση κυλίνδρων, μηχανισμών και εξαρτημάτων.",
    details: [
      "Αντικατάσταση κυλίνδρων",
      "Επισκευή κλειδαριών ασφαλείας",
      "Ρύθμιση μηχανισμών",
      "Εγγύηση εργασίας",
    ],
    image: serviceRepair,
  },
];

const ServicesPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-dark-section">
          <div className="container">
            <Link to="/" className="inline-flex items-center gap-2 text-[hsl(0,0%,60%)] hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Αρχική
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              Οι <span className="text-gradient-red">Υπηρεσίες</span> μας
            </h1>
            <p className="text-[hsl(0,0%,60%)] text-lg max-w-2xl">
              Αναλυτική παρουσίαση όλων των υπηρεσιών κλειδαρά που προσφέρουμε. Από κλειδαριές ασφαλείας μέχρι immobilizer αυτοκινήτου.
            </p>
          </div>
        </section>

        {/* Service Details */}
        {services.map((s, i) => (
          <section
            key={i}
            className={`py-20 ${i % 2 === 0 ? "bg-background" : "bg-secondary"}`}
          >
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-foreground">{s.title}</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-3 mb-8">
                    {s.details.map((d, j) => (
                      <li key={j} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="tel:+306944788286"
                    className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                  >
                    <Phone className="w-4 h-4" />
                    Κλείστε Ραντεβού
                  </a>
                </div>
                <div className={`rounded-xl overflow-hidden shadow-card-light ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-80 lg:h-[420px] object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default ServicesPage;
