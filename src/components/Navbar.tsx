import { useState, useEffect } from "react";
import { Phone, Menu, X, Key } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Αρχική", href: "/" },
  { label: "Υπηρεσίες", href: "/ypiresies" },
  { label: "Γκαλερί", href: "/gallery" },
  { label: "Προϊόντα", href: "/proionta" },
  { label: "Επικοινωνία", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname === "/") {
        const el = document.querySelector(href.replace("/", ""));
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/98 backdrop-blur-md shadow-card-light" : "bg-background"} border-b border-border`}>
      {/* Top bar with name & phone — always visible */}
      <div className="bg-foreground text-background">
        <div className="container flex items-center justify-between py-2 text-sm">
          <span className="font-semibold tracking-wide">Παντελής Λυτίνας — Κλειδαράς</span>
          <a href="tel:+306944788286" className="flex items-center gap-1.5 font-bold hover:opacity-80 transition-opacity">
            <Phone className="w-3.5 h-3.5" />
            694 478 82 86
          </a>
        </div>
      </div>

      <div className="container flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center gap-2">
          <Key className="w-6 h-6 text-primary" />
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            Παντελής <span className="text-gradient-red">Λυτίνας</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            l.href.startsWith("/#") ? (
              <a
                key={l.href}
                href={l.href}
                onClick={() => handleClick(l.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.href}
                to={l.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === l.href ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
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
              {navLinks.map((l) =>
                l.href.startsWith("/#") ? (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => handleClick(l.href)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    key={l.href}
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                )
              )}
              <a
                href="tel:+306944788286"
                className="flex items-center justify-center gap-2 bg-gradient-red text-primary-foreground px-5 py-3 rounded-lg font-bold"
              >
                <Phone className="w-4 h-4" />
                📞 694 478 82 86
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
