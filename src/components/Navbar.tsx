import { useState } from "react";
import { Phone, Menu, X, Key } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Σχετικά", href: "#about" },
  { label: "Γιατί Εμάς", href: "#why-us" },
  { label: "Επικοινωνία", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <Key className="w-7 h-7 text-primary" />
          <span className="text-xl font-extrabold tracking-tight">
            Key <span className="text-gradient-gold">Shop</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+306944788286"
          className="hidden md:flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
        >
          <Phone className="w-4 h-4" />
          694 478 82 86
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
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+306944788286"
                className="flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-3 rounded-lg font-bold"
              >
                <Phone className="w-4 h-4" />
                694 478 82 86
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
