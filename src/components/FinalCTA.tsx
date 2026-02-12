import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, APP_SIGN_UP_URL } from "@/const";

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
            <a href={APP_SIGN_UP_URL} target="_blank">Subscribe</a>
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            Choose monthly or annual. Upgrade anytime.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            For enterprise or support,{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary hover:underline">
              contact us
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};
