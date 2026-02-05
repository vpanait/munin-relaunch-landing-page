import { motion } from "motion/react";
import { FloatingShapesV2 } from "@/components/atoms/FloatingShapesV2";

const services = [
  {
    title: "Portfolio Management",
    description: "Customized investment strategies tailored to your financial goals and risk tolerance.",
  },
  {
    title: "Wealth Preservation",
    description: "Protect and grow your assets through diversified, risk-managed investment approaches.",
  },
  {
    title: "Strategic Planning",
    description: "Comprehensive financial planning to optimize your long-term wealth trajectory.",
  },
  {
    title: "Asset Allocation",
    description: "Data-driven allocation strategies across multiple asset classes and markets.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 border-t overflow-hidden">
      <FloatingShapesV2 />
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We seek to provide flexible financing to help companies adapt, evolve and lead. 
            We help institutions achieve long-term financial goals through investment strategies 
            designed to deliver strong risk-adjusted returns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-white border-2 border-foreground/5 rounded-2xl hover:shadow-xl hover:border-accent/40 hover:shadow-accent/10 transition-all duration-300 shadow-lg">
                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
