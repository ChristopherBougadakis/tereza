import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+306944788286"
      className="fixed bottom-6 right-6 z-50 md:hidden w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold animate-pulse-glow"
      aria-label="Καλέστε μας"
    >
      <Phone className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default FloatingCallButton;
