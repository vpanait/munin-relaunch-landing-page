import { motion } from "motion/react";
import { ScheduleConsultationButton } from "@/components/atoms/ScheduleConsultationButton";
import WhatsappButton from "@/components/atoms/WhatsappButton";
import { useEffect, useRef } from "react";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(console.error);
    }
  }, []);

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* <source src="/hero-video.webm" type="video/webm" /> */}
          {/* Fallback image if video doesn't load */}
          <img 
            src="/hero-image.jpg" 
            alt="Professional financial analysis dashboard" 
            className="w-full h-full object-cover"
          />
        </video>
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-end justify-start p-6 lg:p-12 pb-20 lg:pb-24">
        <div className="max-w-2xl lg:max-w-4xl">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4 lg:space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xs lg:text-sm font-medium text-white/80 tracking-wide uppercase"
              >
                Professional Asset Management | Capital Solutions | Wealth Advisory
              </motion.p>
              
              <h1 className="text-3xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight">
                Expert Asset Management
                <br />
                <span className="text-accent">for Growing Businesses</span>
              </h1>
              
              <p className="text-base lg:text-xl text-white/90 leading-relaxed">
                We specialize in professional asset management, helping companies maximize value while providing flexible capital solutions. 
                Trusted by businesses navigating today's challenges and tomorrow's opportunities.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScheduleConsultationButton />
              <WhatsappButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
