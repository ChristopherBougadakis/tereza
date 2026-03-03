import { motion } from "framer-motion";

// Floating geometric shapes for playful backgrounds
export const FloatingShapes = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const color = variant === "dark" ? "hsl(0 80% 50% / 0.08)" : "hsl(0 80% 50% / 0.06)";
  const borderColor = variant === "dark" ? "hsl(0 80% 50% / 0.12)" : "hsl(0 80% 50% / 0.1)";

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[5%] w-24 h-24 rounded-full border-2"
        style={{ borderColor }}
      />
      <motion.div
        animate={{ y: [15, -25, 15], x: [-10, 10, -10] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[60%] right-[8%] w-16 h-16 rounded-full"
        style={{ backgroundColor: color }}
      />
      {/* Floating diamonds */}
      <motion.div
        animate={{ rotate: [45, 225, 405], scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[25%] right-[15%] w-12 h-12 border-2"
        style={{ borderColor, transform: "rotate(45deg)" }}
      />
      <motion.div
        animate={{ y: [10, -30, 10], rotate: [0, 90, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[15%] left-[12%] w-20 h-20 border-2 rounded-lg"
        style={{ borderColor }}
      />
      {/* Small dots */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -15 + Math.random() * 30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            top: `${10 + Math.random() * 80}%`,
            left: `${5 + Math.random() * 90}%`,
          }}
        />
      ))}
    </div>
  );
};

// Geometric grid pattern overlay
export const GridPattern = ({ variant = "light" }: { variant?: "light" | "dark" }) => {
  const opacity = variant === "dark" ? "0.04" : "0.03";
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(hsl(0 80% 50% / ${opacity}) 1px, transparent 1px),
          linear-gradient(90deg, hsl(0 80% 50% / ${opacity}) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
};

// Noise/grain texture overlay
export const NoiseTexture = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      backgroundSize: "128px 128px",
    }}
  />
);
