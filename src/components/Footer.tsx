import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-foreground text-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="font-extrabold text-lg">Παντελής</span>
              <span className="font-extrabold text-lg text-primary">Λύτινας</span>
            </div>
            <p className="text-sm text-background/60 mb-3">
              Επαγγελματικές υπηρεσίες κλειδαρά στο Ηράκλειο Κρήτης από το 1997.
              Αντιγραφή κλειδιών, αλλαγή κλειδαριών, κλειδαράς αυτοκινήτου, immobilizer, χρηματοκιβώτια.
            </p>
            <address className="not-italic text-sm text-background/50 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-primary/70 shrink-0" />
                <span>Κονδυλάκη 101, Ηράκλειο 712 01, Κρήτη</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-primary/70 shrink-0" />
                <a href="tel:+306944788286" className="hover:text-primary transition-colors">694 478 82 86</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 text-primary/70 shrink-0" />
                <a href="tel:+302810313339" className="hover:text-primary transition-colors">2810 313 339</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 text-primary/70 shrink-0" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lytinas@gmail.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">lytinas@gmail.com</a>
              </div>
            </address>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-background/80">Υπηρεσίες Κλειδαρά Ηράκλειο</h4>
            <div className="flex flex-col gap-1 text-sm text-background/50">
              <span>• Αντιγραφή κλειδιών αυτοκινήτου</span>
              <span>• Αλλαγή &amp; εγκατάσταση κλειδαριών</span>
              <span>• Κλειδαράς αυτοκινήτου — Immobilizer</span>
              <span>• Κλειδαριές ασφαλείας &amp; θωρακισμένων πορτών</span>
              <span>• Χρηματοκιβώτια — άνοιγμα &amp; εγκατάσταση</span>
              <span>• Άνοιγμα κλειδωμένης πόρτας 24/7</span>
              <span>• Παντογραφικά &amp; πολυσημειακά κλειδιά</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-background/80">Σελίδες &amp; Περιοχές</h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2 text-sm text-background/50 mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Αρχική — Κλειδαράς Ηράκλειο</Link>
              <Link to="/ypiresies" className="hover:text-primary transition-colors">Υπηρεσίες Κλειδαρά</Link>
            </nav>
            <p className="text-xs text-background/35 leading-relaxed">
              Εξυπηρετούμε: Κεντρικό Ηράκλειο, Παλαιά Πόλη, Νέα Αλικαρνασσός, Αλικαρνασσός, Γάζι, Κνωσσός, Βιλανδρέδο, Μαλεβίζι και όλη την Κρήτη.
            </p>
          </div>
        </div>
        <div className="border-t border-background/15 pt-6 text-center text-sm text-background/40">
          © {new Date().getFullYear()} Κλειδαράς Ηράκλειο — Παντελής Λύτινας | Key Shop Ηρακλείου. Με επιφύλαξη παντός δικαιώματος.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
