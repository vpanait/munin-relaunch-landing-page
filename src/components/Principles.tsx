import { motion } from "motion/react";
import { FloatingShapes } from "@/components/atoms/FloatingShapes";

export const Principles = () => {
  const principles = [
    {
      title: "Sanctity of Capital",
      description: "Your capital is sacred to us. We view our clients as long-term partners and manage their assets with the utmost care and responsibility, treating capital preservation as paramount.",
    },
    {
      title: "Conviction & Courage",
      description: "Preparation, discipline, and calculated analysis allow us to act when others hesitate. We have the courage to challenge conventional wisdom and invest based on independent research, often before the market fully understands the opportunity.",
    },
    {
      title: "Value-Driven Approach",
      description: "Our investment process is driven by facts and fundamentals, not emotion. We focus on valuation, catalysts, and total returns with a disciplined, patient approach that transcends short-term market noise.",
    },
    {
      title: "Long-Term Orientation",
      description: "Our investments are positioned for long-term success with clear value drivers, not short-term speculation. This patient approach allows us to capitalize on the market's short-sightedness and generate sustainable returns.",
    },
    {
      title: "Risk Management",
      description: "We build substantial margins of safety into every decision and maintain disciplined capital allocation. Holding cash when opportunities don't meet our risk-adjusted return objectives is integral to protecting capital.",
    },
    {
      title: "Aligned Interests",
      description: "Our team invests alongside our clients, ensuring our interests are perfectly aligned. We succeed together through shared commitment and transparency, creating true partnership in wealth creation.",
    },
  ];

  return (
    <section id="principles" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <FloatingShapes />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-sm font-medium text-white/60 tracking-wide uppercase mb-4">
            Our Guiding Principles
          </p>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-6">
            Investment Excellence Through
            <span className="text-accent"> Proven Principles</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Our team is committed to delivering exceptional results through a disciplined, 
            value-driven approach that puts your capital first.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {principles.map((principle, index) => {
            return (
              <motion.div
                key={principle.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-accent/5 blur-xl transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-serif font-bold text-white mb-4">
                      {principle.title}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

