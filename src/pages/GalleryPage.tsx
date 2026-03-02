import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import serviceLocks from "@/assets/service-locks.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceSafe from "@/assets/service-safe.jpg";
import serviceKeys from "@/assets/service-keys.jpg";
import serviceFlip from "@/assets/service-flip.jpg";
import serviceRepair from "@/assets/service-repair.jpg";

const images = [
  { src: gallery1, title: "Εγκατάσταση Θωρακισμένης Πόρτας", category: "Πόρτες" },
  { src: gallery2, title: "Εργαστήριο Key Shop", category: "Εργαστήριο" },
  { src: gallery3, title: "Εγκατάσταση Smart Lock", category: "Κλειδαριές" },
  { src: gallery4, title: "Κοπή Κλειδιών", category: "Κλειδιά" },
  { src: serviceLocks, title: "Κλειδαριά Ασφαλείας", category: "Κλειδαριές" },
  { src: serviceCar, title: "Κλειδιά Αυτοκινήτου", category: "Αυτοκίνητο" },
  { src: gallery5, title: "Πόρτα Ασφαλείας", category: "Πόρτες" },
  { src: gallery6, title: "Κλειδαριά Αυτοκινήτου", category: "Αυτοκίνητο" },
  { src: serviceSafe, title: "Χρηματοκιβώτιο Ασφαλείας", category: "Χρηματοκιβώτια" },
  { src: serviceKeys, title: "Κλειδιά Οικίας", category: "Κλειδιά" },
  { src: serviceFlip, title: "Αναδιπλούμενο Κλειδί", category: "Αυτοκίνητο" },
  { src: serviceRepair, title: "Επισκευή Κλειδαριάς", category: "Κλειδαριές" },
];

const categories = ["Όλα", ...Array.from(new Set(images.map((img) => img.category)))];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("Όλα");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filtered = activeCategory === "Όλα" ? images : images.filter((img) => img.category === activeCategory);

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
              <span className="text-gradient-red">Γκαλερί</span> Εργασιών
            </h1>
            <p className="text-[hsl(0,0%,60%)] text-lg max-w-2xl">
              Δείτε παραδείγματα από τις εργασίες μας. Κλειδαριές, πόρτες ασφαλείας, κλειδιά αυτοκινήτων και πολλά ακόμα.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer rounded-xl overflow-hidden border border-border shadow-card-light"
                    onClick={() => setSelectedImage(i)}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end">
                        <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-2">
                            {img.category}
                          </span>
                          <h3 className="text-background font-bold">{img.title}</h3>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-background/70 hover:text-background transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={filtered[selectedImage]?.src}
              alt={filtered[selectedImage]?.title}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <FloatingCallButton />
    </>
  );
};

export default GalleryPage;
