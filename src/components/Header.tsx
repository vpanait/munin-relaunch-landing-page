import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsHeroInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0,
        rootMargin: "-50px 0px 0px 0px", // Adjust offset as needed
      }
    );

    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    }

    return () => {
      if (heroSection) {
        observer.unobserve(heroSection);
      }
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHeroInView
          ? "bg-background/0 backdrop-blur-mdx border-b border-border"
          : "bg-background/50 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <motion.a 
          href="/"
          whileHover={{ scale: 1.02 }}
          className={`text-2xl font-serif font-bold transition-colors ${
            isHeroInView ? "text-white" : "text-foreground"
          }`}
        >
          CAERUS
        </motion.a>
        
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#services" 
            className={`text-sm font-medium transition-colors ${
              isHeroInView ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            Services
          </a>
          <a 
            href="#about" 
            className={`text-sm font-medium transition-colors ${
              isHeroInView ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            About
          </a>
          <a 
            href="#contact" 
            className={`text-sm font-medium transition-colors ${
              isHeroInView ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-foreground"
            }`}
          >
            Contact
          </a>
          
          {/* <Button variant="gold" size="sm">
            Get Started
          </Button> */}
        </div>
      </nav>
    </motion.header>
  );
};
