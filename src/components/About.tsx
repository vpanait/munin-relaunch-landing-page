import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { FloatingShapesV3 } from "@/components/atoms/FloatingShapesV3";

const principles = [
  "Fiduciary responsibility and transparent communication",
  "Evidence-based investment strategies",
  "Personalized service with institutional capabilities",
  "Long-term partnership approach",
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      {/* Floating shapes */}
      <FloatingShapesV3 />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                The Only Constant is Change
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Caerus, we constantly adapt to new habitats. As markets change, Caerus transforms by creating 
                innovative and differentiated strategies that are defining the future of finance. We think it through, 
                then we Think It <em>New</em>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Named after the Greek god of opportunity, Caerus embodies our philosophy of recognizing 
                and seizing the right moments in the market while maintaining a steady, principled approach 
                to wealth management.
              </p>
            </div>
            
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 leading-relaxed">{principle}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-10 border border-border shadow-sm">
              <blockquote className="text-xl lg:text-2xl font-serif text-foreground mb-8 leading-relaxed">
                "In the world of finance, timing and strategy are everything. We help our clients 
                navigate markets with confidence and clarity."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">RZ</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Riccardo Zanella</p>
                  <p className="text-muted-foreground">Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
