import { motion } from "motion/react";
import heroImage from "@/assets/hero-image.jpg";
import { ScheduleConsultationButton } from "@/components/atoms/ScheduleConsultationButton";
import WhatsappButton from "@/components/atoms/WhatsappButton";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm font-medium text-muted-foreground tracking-wide uppercase"
              >
                Asset Manager | Capital Provider | Wealth Solutions
              </motion.p>
              
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                Creating New & Better Solutions
                <br />
                <span className="text-accent">for the Modern World</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                At Caerus, we ask <em>what if</em> to create <em>what is</em>, because yesterday's strategies may not solve tomorrow's challenges. 
                We provide flexible financing to help companies adapt, evolve and lead.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <ScheduleConsultationButton />
              <WhatsappButton />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={heroImage} 
                alt="Professional financial analysis dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
