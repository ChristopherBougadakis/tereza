import { motion } from "framer-motion";

const allClients = [
  { name: "Interamerican", logo: "/logos/clients/interamerican.png" },
  { name: "Groupama", logo: "/logos/clients/groupama.png" },
  { name: "ΕΛΤΑ", logo: "/logos/clients/elta.png" },
  { name: "ΚΕΝ" },
  { name: "El Al", logo: "/logos/clients/elal.png" },
  { name: "Marmaras", logo: "/logos/clients/marmaras.png" },
  { name: "Πανεπιστήμιο Κρήτης", logo: "/logos/clients/uoc.png" },
  { name: "ΕΡΤ", logo: "/logos/clients/ert.png" },
  { name: "Zeus Hotels", logo: "/logos/clients/zeus.png" },
  { name: "Hotel Akti", logo: "/logos/clients/akti.png" },
  { name: "Lato Boutique Hotel", logo: "/logos/clients/lato.png" },
  { name: "Theseus Beach Village", logo: "/logos/clients/image.ico" },
  { name: "Λητώ", logo: "/logos/clients/lito_hotel.png" },
  { name: "Stergiou", logo: "/logos/clients/stergiou.png" },
  { name: "Mathioudakis", logo: "/logos/clients/mathioudakis.png" },
  { name: "Κρητικός Φούρνος", logo: "/logos/clients/kritikos.png" },
  { name: "Απλάδα", logo: "/logos/clients/aplada.png" },
  { name: "Sports Point", logo: "/logos/clients/sportspoint.png" },
];

const ClientsSection = () => {
  const row1 = [...allClients, ...allClients];
  const row2 = [...allClients.slice().reverse(), ...allClients.slice().reverse()];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-32 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20 px-4 relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Κορυφαίοι{" "}
          <span className="text-gradient-red">Πελάτες</span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
          Συνεργαζόμαστε με επιχειρήσεις και οργανισμούς που εμπιστεύονται σταθερά την ποιότητα και την ταχύτητά μας.
        </p>
      </motion.div>

      {/* Row 1 — scrolls left */}
      <div className="relative w-full mb-8">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 md:w-40 bg-gradient-to-r from-background via-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 md:w-40 bg-gradient-to-l from-background via-background to-transparent z-10" />
        <div className="flex animate-scroll w-max" style={{ animationDuration: "80s" }}>
          {row1.map((client, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 mx-2 sm:mx-4 w-36 sm:w-48 md:w-60 h-20 sm:h-24 md:h-28 bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl flex items-center justify-center hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group px-3 sm:px-6"
            >
              {client.logo ? (
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ) : (
                <span className="text-muted-foreground font-bold text-base tracking-wider group-hover:text-primary transition-colors text-center">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right (reverse) */}
      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 md:w-40 bg-gradient-to-r from-background via-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 md:w-40 bg-gradient-to-l from-background via-background to-transparent z-10" />
        <div className="flex animate-scroll-reverse w-max" style={{ animationDuration: "85s" }}>
          {row2.map((client, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 mx-2 sm:mx-4 w-36 sm:w-48 md:w-60 h-20 sm:h-24 md:h-28 bg-card/80 backdrop-blur-sm border-2 border-border/50 rounded-2xl flex items-center justify-center hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300 group px-3 sm:px-6"
            >
              {client.logo ? (
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                  />
                </div>
              ) : (
                <span className="text-muted-foreground font-bold text-base tracking-wider group-hover:text-primary transition-colors text-center">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
