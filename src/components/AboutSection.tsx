import { motion } from "framer-motion";

const stats = [
  { value: "29+", label: "Χρόνια Εμπειρίας" },
  { value: "100+", label: "Ευχαριστημένοι Πελάτες" },
  { value: "24/7", label: "Διαθεσιμότητα" },
  { value: "Όλη", label: "η Κρήτη" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Σχετικά με το{" "}
              <span className="text-gradient-gold">Key Shop</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Από το <strong className="text-foreground">1997</strong>, το Key Shop αποτελεί σημείο αναφοράς
              στον χώρο της κλειδαράς στο Ηράκλειο Κρήτης. Με 29 χρόνια
              εμπειρίας, προσφέρουμε αξιόπιστες υπηρεσίες ασφαλείας σε όλη
              την Κρήτη.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Χρησιμοποιούμε τελευταίας τεχνολογίας εξοπλισμό και εγγυόμαστε
              άριστο αποτέλεσμα χωρίς ζημιές. Η εμπιστοσύνη εκατοντάδων
              πελατών είναι η καλύτερή μας σύσταση.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <div className="text-3xl md:text-4xl font-extrabold text-gradient-gold mb-2">
                  {s.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
