import { motion } from "framer-motion";
import { Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

import productDoor from "@/assets/product-door.jpg";
import productCylinder from "@/assets/product-cylinder.jpg";
import productSafe from "@/assets/product-safe.jpg";
import productSmart from "@/assets/product-smart.jpg";
import productRemotes from "@/assets/product-remotes.jpg";
import productHandle from "@/assets/product-handle.jpg";
import productCctv from "@/assets/product-cctv.jpg";
import serviceFlip from "@/assets/service-flip.jpg";

const products = [
  {
    title: "Θωρακισμένες Πόρτες",
    desc: "Πόρτες ασφαλείας υψηλής αντοχής με πολλαπλά σημεία κλειδώματος. Ιδανικές για κατοικίες και επαγγελματικούς χώρους.",
    image: productDoor,
    tag: "Δημοφιλές",
  },
  {
    title: "Κύλινδροι Ασφαλείας",
    desc: "Κύλινδροι ευρωπαϊκού προφίλ υψηλής ασφαλείας. Αντοχή σε drilling, picking και bumping.",
    image: productCylinder,
    tag: "Ασφάλεια",
  },
  {
    title: "Ψηφιακά Χρηματοκιβώτια",
    desc: "Χρηματοκιβώτια με ηλεκτρονικό κλείδωμα για σπίτι και γραφείο. Πιστοποιημένη ασφάλεια.",
    image: productSafe,
    tag: "Premium",
  },
  {
    title: "Smart Lock Κλειδαριές",
    desc: "Ηλεκτρονικές κλειδαριές με δακτυλικό αποτύπωμα, κωδικό PIN και Bluetooth. Η τεχνολογία στην πόρτα σας.",
    image: productSmart,
    tag: "Νέο",
  },
  {
    title: "Τηλεχειριστήρια Γκαράζ",
    desc: "Τηλεχειριστήρια και δέκτες για γκαραζόπορτες. Συμβατά με όλες τις μάρκες. Rolling code ασφαλείας.",
    image: productRemotes,
    tag: "Γκαράζ",
  },
  {
    title: "Χειρολαβές & Εξαρτήματα",
    desc: "Χειρολαβές ασφαλείας, πόμολα και εξαρτήματα πορτών. Ποιότητα και αισθητική.",
    image: productHandle,
    tag: "Αξεσουάρ",
  },
  {
    title: "Συστήματα CCTV",
    desc: "Κάμερες ασφαλείας και συστήματα παρακολούθησης. Ολοκληρωμένη προστασία χώρου.",
    image: productCctv,
    tag: "Ασφάλεια",
  },
  {
    title: "Αναδιπλούμενα Κλειδιά",
    desc: "Flip key θήκες για αυτοκίνητα και μοτοσυκλέτες. Μετατρέψτε το κλειδί σας σε μοντέρνο αναδιπλούμενο.",
    image: serviceFlip,
    tag: "Αυτοκίνητο",
  },
];

const ProductsPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-dark-section">
          <div className="container">
            <Link to="/" className="inline-flex items-center gap-2 text-[hsl(0,0%,60%)] hover:text-primary transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Αρχική
            </Link>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="text-gradient-red">Προϊόντα</span> & Κατάλογος
            </h1>
            <p className="text-[hsl(0,0%,60%)] text-lg max-w-2xl">
              Ανακαλύψτε τα προϊόντα ασφαλείας που προσφέρουμε. Κλειδαριές, πόρτες, χρηματοκιβώτια και πολλά ακόμα.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden shadow-card-light hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-2 text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
                    <a
                      href="tel:+306944788286"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                    >
                      <Phone className="w-4 h-4" />
                      Ζητήστε Προσφορά
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 bg-dark-section rounded-2xl p-10 md:p-16 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-[hsl(0,0%,95%)]">
                Δεν βρήκατε αυτό που ψάχνετε;
              </h2>
              <p className="text-[hsl(0,0%,60%)] text-lg mb-8 max-w-xl mx-auto">
                Καλέστε μας και θα σας βοηθήσουμε να βρείτε ακριβώς αυτό που χρειάζεστε.
              </p>
              <a
                href="tel:+306944788286"
                className="inline-flex items-center gap-3 bg-gradient-red text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                694 478 82 86
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default ProductsPage;
