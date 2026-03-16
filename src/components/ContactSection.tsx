import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const mapsLocation = "https://www.google.com/maps/search/?api=1&query=Κονδυλάκη+101,+Ηράκλειο,+Κρήτη,+Ελλάδα";
  const directionsLink = "https://www.google.com/maps/dir/?api=1&destination=Κονδυλάκη+101,+Ηράκλειο,+Κρήτη,+Ελλάδα&travelmode=driving";
  const gmailLink = "https://mail.google.com/mail/?view=cm&fs=1&to=lytinas@gmail.com";

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            <span className="text-gradient-red">Επικοινωνία</span>
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
            className="space-y-5"
          >
            {[
              { icon: Phone, label: "Τηλέφωνα", value: "2810 313 339 | 694 478 82 86", href: "tel:+306944788286" },
              { icon: Mail, label: "Email", value: "lytinas@gmail.com", href: gmailLink },
              { icon: MapPin, label: "Διεύθυνση", value: "Κονδυλάκη 101, Ηράκλειο 712 01", href: mapsLocation },
              { icon: Clock, label: "Ωράριο", value: "Δευ-Σάβ: 08:00-20:00 | Κυρ: Κατόπιν ραντεβού" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 shadow-card-light">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-foreground">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col rounded-xl border border-border shadow-card-light bg-card overflow-hidden"
          >
            {/* Pinned map — Κονδυλάκη 101, Ηράκλειο */}
            <div className="relative w-full" style={{ minHeight: 340 }}>
              <iframe
                title="Κλειδαράς Παντελής Λυτίνας — Κονδυλάκη 101, Ηράκλειο Κρήτης"
                src="https://maps.google.com/maps?q=Κονδυλάκη+101,+Ηράκλειο,+Κρήτη&output=embed&z=17&hl=el"
                width="100%"
                height="340"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Address + Directions button */}
            <div className="p-5 border-t border-border bg-card flex flex-col gap-4">
              {/* Address row */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">Διεύθυνση καταστήματος</div>
                  <div className="font-bold text-foreground text-base leading-snug">
                    Κονδυλάκη 101
                  </div>
                  <div className="text-sm text-muted-foreground">Ηράκλειο Κρήτης, 712 01</div>
                </div>
              </div>

              {/* Directions button */}
              <a
                href={directionsLink}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-5 py-3 rounded-xl font-bold text-base hover:opacity-90 transition-opacity shadow-red"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Οδηγίες Πλοήγησης
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
