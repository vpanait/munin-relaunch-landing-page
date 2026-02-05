import { ScheduleConsultationButton } from "@/components/atoms/ScheduleConsultationButton";
import { motion } from "motion/react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/const";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  // WhatsApp URL with phone number (remove all spaces, dashes, parentheses, but keep +)
  const whatsappUrl = `https://wa.me/${CONTACT_PHONE.replace(/[\s\-()]/g, '')}`;
  
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #000 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-muted-foreground mb-4 tracking-wider uppercase">
              Get In Touch
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Begin Your Financial Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
              Discover how Caerus can help you achieve your financial objectives.
              Schedule a consultation with our team today.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Phone Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-foreground/10 rounded-xl p-8 shadow-lg hover:border-accent/40 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-foreground text-lg uppercase tracking-wider">Phone</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Call us directly or reach us via WhatsApp
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full"
                  >
                    <a href={`tel:${CONTACT_PHONE}`}>
                      Call {CONTACT_PHONE}
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="w-full"
                  >
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Open WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border-2 border-foreground/10 rounded-xl p-8 shadow-lg hover:border-accent/40 hover:shadow-2xl transition-all duration-300"
            >
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-foreground text-lg uppercase tracking-wider">Email</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Send us a message and we'll get back to you
                </p>
                <p className="text-foreground font-medium text-sm h-10 flex items-center justify-center">
                  {CONTACT_EMAIL}
                </p>
                <Button
                  asChild
                  className="w-full"
                >
                  <a href={`mailto:${CONTACT_EMAIL}`}>
                    Email Us
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border-2 border-foreground/10 rounded-xl p-8 shadow-lg hover:border-accent/40 hover:shadow-2xl transition-all duration-300 md:col-span-2 lg:col-span-1"
            >
              <div className="space-y-4">
                <h3 className="font-serif font-bold text-foreground text-lg uppercase tracking-wider">Location</h3>
                <div className="space-y-3">
                  <p className="text-foreground font-semibold leading-relaxed">
                    Dubai International Financial Centre
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dubai, United Arab Emirates
                  </p>
                  <p className="text-muted-foreground text-sm">
                    We operate globally with a focus on serving clients across the Middle East and international markets.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Schedule Consultation CTA */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center bg-white border-2 border-foreground/10 rounded-xl p-8 shadow-lg hover:border-accent/40 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="font-serif font-bold text-foreground text-2xl mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Schedule a consultation with our team to discuss your financial goals and how we can help.
            </p>
            <ScheduleConsultationButton />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
