import { motion } from "motion/react";

export const Understanding = () => {
  return (
    <section id="understanding" className="relative py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-serif font-bold text-secondary">
              The problem
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Advisors are busy. Client meetings generate valuable context,
              decisions, and next steps, but documenting and following up
              consistently takes time. As a result, outcomes and client
              communication become inconsistent.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-serif font-bold text-secondary">
              The solution
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Munin helps you capture the exact data you care about during
              calls, keep a client-level history you can search, and
              automatically produce post-meeting outputs (structured notes,
              action items, meeting summary, and a follow-up email draft) so you
              can move the relationship forward, fast.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
