import { motion } from "motion/react";
import { Hash, Mail, AlarmClock, ShieldCheck, BadgeCheck, Eye } from "lucide-react";
import type { ComponentType } from "react";

type PrivacyCard = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

const cards: PrivacyCard[] = [
  {
    title: "IP Address Hashing",
    description:
      "Viewer IP addresses are hashed before storage. Raw IP addresses are never persisted in our database.",
    icon: Hash,
  },
  {
    title: "Privacy-Preserving Attribution",
    description:
      "Viewer identity is stored as partial email hints, balancing traceability with privacy.",
    icon: Mail,
  },
  {
    title: "Data Retention Controls",
    description:
      "Delete documents, links, and viewer data at any time.",
    icon: AlarmClock,
  },
  {
    title: "GDPR Compliance",
    description:
      "Data minimization, purpose limitation, and the right to erasure are built into the platform.",
    icon: ShieldCheck,
  },
  {
    title: "CCPA Compliance",
    description:
      "Transparent data collection and consumer rights under the CCPA.",
    icon: BadgeCheck,
  },
  {
    title: "PDPL Compliance",
    description:
      "Consent-based processing, data subject rights, and breach notification under Middle East data protection laws.",
    icon: Eye,
  },
];

export const PrivacyDataHandling = () => {
  return (
    <section id="privacy" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-5xl font-serif font-bold tracking-tight">
            Privacy and Data Handling
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm lg:text-base">
            We collect only what is necessary and protect everything we store.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="rounded-2xl border border-border/10 bg-card shadow-sm hover:shadow-md transition-shadow p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-muted/30 border border-border/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-foreground/70" />
                </div>
                <h3 className="font-serif font-bold text-foreground text-lg mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

