import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="text-gradient-gold">Επικοινωνία</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Βρείτε μας ή καλέστε μας — είμαστε πάντα δίπλα σας.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: Phone, label: "Τηλέφωνα", value: "2810 313 339 | 694 478 82 86", href: "tel:+306944788286" },
              { icon: Mail, label: "Email", value: "keyshop@gmail.com", href: "mailto:keyshop@gmail.com" },
              { icon: MapPin, label: "Διεύθυνση", value: "Κονδυλάκη 101, Ηράκλειο Κρήτης", href: "https://maps.google.com/?q=Κονδυλάκη+101+Ηράκλειο" },
              { icon: Clock, label: "Ωράριο", value: "Δευ-Σάβ: 08:00-20:00 | Κυρ: Κατόπιν ραντεβού" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-semibold hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-semibold">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border border-border h-80 lg:h-auto"
          >
            <iframe
              title="Key Shop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.5!2d25.1353!3d35.3387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149a5a01c4e1f26d%3A0x8f0!2z0prOv869zrTPhc67zqzOus63IDEwMSwgzpfPgc6szrrOu861zrnOvw!5e0!3m2!1sel!2sgr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
