import { motion } from "framer-motion";
import { BadgeEuro, Zap, ShieldCheck, Cpu, Award } from "lucide-react";

const reasons = [
  { icon: BadgeEuro, title: "Προσιτές Τιμές", desc: "Ανταγωνιστικές τιμές χωρίς κρυφές χρεώσεις." },
  { icon: Zap, title: "Γρήγορη Εξυπηρέτηση", desc: "Άμεση ανταπόκριση σε κάθε κλήση σας." },
  { icon: ShieldCheck, title: "Χωρίς Ζημιές", desc: "Επαγγελματική εργασία με σεβασμό στην περιουσία σας." },
  { icon: Cpu, title: "Τελευταία Τεχνολογία", desc: "Σύγχρονος εξοπλισμός και μέθοδοι αιχμής." },
  { icon: Award, title: "Πολυετής Εμπειρία", desc: "29 χρόνια στον χώρο της ασφάλειας." },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Γιατί να Επιλέξετε τον{" "}
            <span className="text-gradient-red">Κλειδαρά Παντελή Λυτίνα</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
