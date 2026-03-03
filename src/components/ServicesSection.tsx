import { motion } from "framer-motion";
import { Lock, Car, Warehouse, KeyRound, Shield, Home, Wrench, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { GridPattern, NoiseTexture } from "./BackgroundDecorations";

import serviceLocks from "@/assets/service-locks.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceGarage from "@/assets/service-garage.jpg";
import serviceSafe from "@/assets/service-safe.jpg";
import serviceKeys from "@/assets/service-keys.jpg";
import serviceFlip from "@/assets/service-flip.jpg";
import serviceRepair from "@/assets/service-repair.jpg";

const services = [
  { icon: Lock, title: "Αδιάρρηκτες Κλειδαριές & Θωρακισμένες Πόρτες", desc: "Τοποθέτηση κλειδαριών ασφαλείας και θωρακισμένων πορτών τελευταίας τεχνολογίας.", image: serviceLocks },
  { icon: Car, title: "Immobilizer Αυτοκινήτου / Moto", desc: "Προγραμματισμός και επισκευή immobilizer για όλες τις μάρκες.", image: serviceCar },
  { icon: Warehouse, title: "Τηλεχειριστήρια Γκαραζόπορτας", desc: "Προγραμματισμός τηλεχειριστηρίων για γκαραζόπορτες κάθε τύπου.", image: serviceGarage },
  { icon: KeyRound, title: "Χαμένα Κλειδιά Αυτοκινήτου", desc: "Κατασκευή νέων κλειδιών αυτοκινήτου ακόμα και χωρίς το αρχικό.", image: serviceCar },
  { icon: Shield, title: "Άνοιγμα Χρηματοκιβωτίων", desc: "Ασφαλές άνοιγμα χρηματοκιβωτίων χωρίς ζημιά.", image: serviceSafe },
  { icon: Home, title: "Αναπαραγωγή Κλειδιών Οικίας", desc: "Ακριβής αναπαραγωγή κλειδιών για κατοικίες και πολυκατοικίες.", image: serviceKeys },
  { icon: Settings, title: "Μετατροπή σε Αναδιπλούμενα", desc: "Μετατροπή κλειδιών σε πρακτικά αναδιπλούμενα flip key.", image: serviceFlip },
  { icon: Wrench, title: "Επισκευή Κλειδαριών", desc: "Επισκευή κλειδαριών παντός τύπου με εγγύηση εργασίας.", image: serviceRepair },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-dark-section relative overflow-hidden">
      <GridPattern variant="dark" />
      <NoiseTexture />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Οι <span className="text-gradient-red">Υπηρεσίες</span> μας
          </h2>
          <p className="text-[hsl(0,0%,60%)] text-lg max-w-xl mx-auto">
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
              className="group bg-dark-card border border-[hsl(0,0%,18%)] rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-card-dark transition-all duration-300"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-3">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-base mb-2">{s.title}</h3>
                <p className="text-sm text-[hsl(0,0%,50%)] leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/ypiresies"
            className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
          >
            Δείτε Αναλυτικά τις Υπηρεσίες
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
