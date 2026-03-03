import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FloatingShapes, NoiseTexture } from "./BackgroundDecorations";

const InstagramSection = () => {
  // Replace YOUR_USERNAME with the actual Instagram username
  const instagramUsername = "keyshop_heraklion";

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <FloatingShapes variant="light" />
      <NoiseTexture />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-primary/20">
            <Instagram className="w-4 h-4" />
            Ακολουθήστε μας
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-foreground">
            Στο <span className="text-gradient-red">Instagram</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Δείτε τις τελευταίες εργασίες μας, νέα προϊόντα και βίντεο σε real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Elfsight Instagram Feed Widget - replace the widget ID with your own from elfsight.com */}
          <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-card-light">
            <Instagram className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-3">@{instagramUsername}</h3>
            <p className="text-muted-foreground mb-6">
              Φωτογραφίες & βίντεο από τις καθημερινές μας εργασίες
            </p>
            <a
              href={`https://www.instagram.com/${instagramUsername}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-red text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
              Δείτε μας στο Instagram
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              💡 Για live embed, πρόσθεσε ένα{" "}
              <a
                href="https://elfsight.com/instagram-feed-widget/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                Elfsight widget
              </a>{" "}
              ή ενσωμάτωσε posts μέσω Instagram oEmbed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
