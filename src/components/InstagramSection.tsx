import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const instagramUsername = "keyshop_heraklion";

  return (
    <section className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ακολουθήστε μας στο{" "}
            <span className="text-gradient-red">Instagram</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Δείτε τις τελευταίες εργασίες μας, νέα προϊόντα και βίντεο σε real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          <div className="bg-background border border-border rounded-2xl p-8 text-center shadow-card-light">
            <Instagram className="w-14 h-14 text-primary mx-auto mb-5" />
            <h3 className="text-xl font-bold mb-2">@{instagramUsername}</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Φωτογραφίες & βίντεο από τις καθημερινές μας εργασίες
            </p>
            <a
              href={`https://www.instagram.com/${instagramUsername}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-red"
            >
              <Instagram className="w-5 h-5" />
              Δείτε μας στο Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
