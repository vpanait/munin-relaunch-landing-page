import { motion } from "motion/react";

export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 border border-accent/20 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-32 w-24 h-24 border border-accent/30 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-40 w-20 h-20 bg-accent/10 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-16 h-16 border border-accent/25 rounded-full"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/50"></div>

      {/* Subtle pattern overlay */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #22c55e 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #22c55e 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 30px 30px'
        }} />
      </div> */}
    </div>
  );
};
