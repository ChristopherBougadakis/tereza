import { Key } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-dark-section">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Key className="w-5 h-5 text-primary" />
              <span className="font-bold text-[hsl(0,0%,95%)]">Key Shop Ηράκλειο</span>
            </div>
            <p className="text-sm text-[hsl(0,0%,50%)]">
              Επαγγελματικές υπηρεσίες κλειδαρά στο Ηράκλειο Κρήτης από το 1997.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[hsl(0,0%,80%)]">Σελίδες</h4>
            <div className="flex flex-col gap-2 text-sm text-[hsl(0,0%,50%)]">
              <Link to="/" className="hover:text-primary transition-colors">Αρχική</Link>
              <Link to="/ypiresies" className="hover:text-primary transition-colors">Υπηρεσίες</Link>
              <Link to="/gallery" className="hover:text-primary transition-colors">Γκαλερί</Link>
              <Link to="/proionta" className="hover:text-primary transition-colors">Προϊόντα</Link>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-[hsl(0,0%,80%)]">Επικοινωνία</h4>
            <div className="flex flex-col gap-2 text-sm text-[hsl(0,0%,50%)]">
              <a href="tel:+306944788286" className="hover:text-primary transition-colors">694 478 82 86</a>
              <a href="tel:+302810313339" className="hover:text-primary transition-colors">2810 313 339</a>
              <a href="mailto:keyshop@gmail.com" className="hover:text-primary transition-colors">keyshop@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[hsl(0,0%,15%)] pt-6 text-center text-sm text-[hsl(0,0%,40%)]">
          © {new Date().getFullYear()} Key Shop. Με επιφύλαξη παντός δικαιώματος.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
