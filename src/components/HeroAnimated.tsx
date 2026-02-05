import { motion } from "motion/react";
import { ScheduleConsultationButton } from "@/components/atoms/ScheduleConsultationButton";
import WhatsappButton from "@/components/atoms/WhatsappButton";
import { FloatingShapes } from "@/components/atoms/FloatingShapes";

export const HeroAnimated = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <FloatingShapes />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
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
                className="text-sm font-medium text-white/80 tracking-wide uppercase"
              >
                Asset Manager | Capital Provider | Wealth Solutions
              </motion.p>

              <h1 className="text-4xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Creating New & Better Solutions
                <br />
                <span className="text-accent">for the Modern World</span>
              </h1>

              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                At Caerus, we ask <em>what if</em> to create <em>what is</em>, because yesterday's strategies may not solve tomorrow's challenges.
                We provide flexible financing to help companies adapt, evolve and lead.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ScheduleConsultationButton />
              <WhatsappButton />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
