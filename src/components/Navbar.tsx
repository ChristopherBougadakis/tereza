import { useState, useEffect } from "react";
import { Phone, Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Αρχική", href: "/" },
  { label: "Υπηρεσίες", href: "/ypiresies" },
  { label: "Επικοινωνία", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      window.scrollTo({ top: 0 });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setOpen(false);
    if (href === "/") {
      e.preventDefault();
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
        window.scrollTo({ top: 0 });
      }
    } else if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.slice(1); // "#contact"
      if (location.pathname === "/") {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const el = document.querySelector(hash);
          el?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/98 backdrop-blur-md shadow-card-light" : "bg-background"} border-b border-border`}>
      <div className="container flex items-center justify-between h-14 md:h-16">
        <a href="/" onClick={handleLogoClick} className="flex items-center gap-1">
          <span className="text-xl font-extrabold tracking-tight text-foreground">Παντελής</span>
          <span className="text-xl font-extrabold tracking-tight text-gradient-red">Λυτίνας</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className={`text-sm font-medium transition-colors ${
                location.pathname === l.href && !l.href.startsWith("/#")
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+306944788286"
          className="hidden md:flex items-center gap-2 bg-gradient-red text-primary-foreground px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity shadow-red"
        >
          <Phone className="w-4 h-4" />
          Καλέστε Τώρα
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => handleNavClick(e, l.href)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                )
              )}
              <div className="flex flex-col gap-3 w-full">
                <a
                  href="tel:+306944788286"
                  className="flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-4 py-3.5 rounded-lg font-bold text-base"
                >
                  <Phone className="w-5 h-5" />
                  694 478 82 86
                </a>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Κονδυλάκη+101,+Ηράκλειο,+Κρήτη,+Ελλάδα&travelmode=driving"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-card border-2 border-primary/40 text-primary px-4 py-3.5 rounded-lg font-bold text-base hover:bg-primary/10 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  Οδηγίες
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
