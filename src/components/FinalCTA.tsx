import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Ready to cut the admin and tighten your follow-ups?
          </h2>
          <Button asChild size="lg" className="rounded-full px-10 mt-4">
            <a href="#pricing">Subscribe</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Choose monthly or annual. Upgrade anytime.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            For enterprise or support,{" "}
            <a href="mailto:contact@munin.ai" className="text-primary hover:underline">
              contact us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};
