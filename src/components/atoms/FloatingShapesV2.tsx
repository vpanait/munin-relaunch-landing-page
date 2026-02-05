import { motion } from "motion/react";

export const FloatingShapesV2 = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Different floating geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            rotate: [0, 45, 90, 45, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-32 right-20 w-20 h-20 border-2 border-accent/40 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            rotate: [0, -90, -180, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 left-24 w-28 h-28 border-2 border-accent/35 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-60 left-48 w-16 h-16 bg-accent/25 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, 120, 240, 360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 right-48 w-24 h-24 border-2 border-accent/30 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-48 right-64 w-12 h-12 bg-accent/20 rounded-full"
        />
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-accent/10"></div>
    </div>
  );
};

