import { Key } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-background">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Key className="w-5 h-5 text-primary" />
          <span className="font-bold text-foreground">Key Shop Ηράκλειο</span>
        </div>
        <p>© {new Date().getFullYear()} Key Shop. Με επιφύλαξη παντός δικαιώματος.</p>
        <a href="https://klidarasiraklio.gr" className="hover:text-primary transition-colors">
          klidarasiraklio.gr
        </a>
      </div>
    </footer>
  );
};

export default Footer;
