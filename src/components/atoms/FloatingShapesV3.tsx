import { motion } from "motion/react";

export const FloatingShapesV3 = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Static shapes with one pulsating element */}
      <div className="absolute inset-0">
        {/* Static diamond shape - top right */}
        <div className="absolute top-20 right-32 w-16 h-16 border-2 border-accent/30 rotate-45" />
        
        {/* Static horizontal line - left side */}
        <div className="absolute top-1/2 -translate-y-1/2 left-12 w-24 h-0.5 bg-accent/25" />
        
        {/* Static triangle shape - bottom left */}
        <div className="absolute bottom-40 left-20 w-0 h-0 border-l-8 border-r-8 border-b-14 border-l-transparent border-r-transparent border-b-accent/30" />
        
        {/* Static square - center right */}
        <div className="absolute top-1/3 right-24 w-12 h-12 border border-accent/30" />
        
        {/* Static circle - top center */}
        <div className="absolute top-32 left-1/2 -translate-x-1/2 w-20 h-20 border-2 border-accent/25 rounded-full" />
        
        {/* Pulsating accent circle - lower right */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-20 w-32 h-32 border-2 border-accent rounded-full"
        />
        
        {/* Inner pulsating ring */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 3.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-20 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border border-accent/60 rounded-full"
        />
        
        {/* Static vertical line - right side */}
        <div className="absolute right-12 top-1/3 bottom-1/4 w-0.5 bg-accent/25" />
        
        {/* Static small dots */}
        <div className="absolute top-64 right-48 w-2 h-2 bg-accent/40 rounded-full" />
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-accent/35 rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-accent/35 rounded-full" />
      </div>
    </div>
  );
};

