import { Button, type ButtonProps } from "@/components/ui/button";
import { CONTACT_PHONE } from "@/const";
import { useIsMobile } from "@/hooks/use-mobile";
import { WhatsappIcon } from '@/components/atoms/icon';
import { motion } from "motion/react";
import { useState } from "react";

interface BookCallButtonProps extends Omit<ButtonProps, 'children'> {
  className?: string;
}

const WhatsappButton = ({ className, variant = "outline", ...props }: BookCallButtonProps) => {
  const isMobile = useIsMobile();

  // Set default size based on screen width
  const buttonSize = isMobile ? "sm" : "lg";
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const phoneNumber = CONTACT_PHONE;
    const message = "Hello! I'm interested in learning more about Caerus's services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      className={className}
      size={buttonSize}
      variant={variant}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      {...props}
    >

      Let's chat
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
        <WhatsappIcon size={44} className="fill-foreground" />
      </motion.div>
    </Button>
  );
};

export default WhatsappButton;
