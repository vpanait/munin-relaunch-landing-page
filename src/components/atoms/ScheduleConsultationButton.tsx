import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { CalendarPlus } from "lucide-react";
import { useState } from "react";
import { SCHEDULE_CONSULTATION_URL } from "@/const";
import { useIsMobile } from "@/hooks/use-mobile";

export const ScheduleConsultationButton = () => {
  const isMobile = useIsMobile();

  // Set default size based on screen width
  const buttonSize = isMobile ? "sm" : "lg";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button variant="gold" size={buttonSize} className="shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(SCHEDULE_CONSULTATION_URL, "_blank")}
    >
      Schedule a Consultation

      <motion.div
        // className="hidden lg:block"
        animate={isHovered ? {
          scale: 1.15,
          x: 2,
          transition: { duration: 0.2, ease: "easeOut" }
        } : {
          scale: 1,
          x: 0,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        whileTap={{
          scale: 0.95,
          transition: { duration: 0.1 }
        }}
      >
        <CalendarPlus className="w-4 h-4" />
      </motion.div>
    </Button>
  );
};
