import { motion } from "motion/react";
import { ShieldCheck, FileKey } from "lucide-react";
import { Eye } from "lucide-react";

const cards = [
  {
    title: "Encryption and Infrastructure",
    icon: ShieldCheck,
    bullets: [
      "Data encrypted at rest and in transit",
      "Passwords hashed and unrecoverable",
      "Strict data isolation between teams",
      "SOC 2 certified hosting",
    ],
  },
  {
    title: "Access and Authentication",
    icon: FileKey,
    bullets: [
      "Password-protected document links",
      "Expiration dates and download controls",
    ],
  },
  {
    title: "Privacy and Compliance",
    icon: Eye,
    bullets: [
      "IP addresses hashed before storage",
      "Minimal data collection by design",
      "Full activity audit trail",
      "GDPR, CCPA, and PDPL compliant",
    ],
  },
] as const;

export const HowWeProtectDocuments = () => {
  return (
    <section id="security" className="relative bg-slate-950 text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,78,216,0.25),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(16,185,129,0.20),transparent_45%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-5xl font-serif font-bold tracking-tight">
            How We Protect Your Documents
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
              >
                <div className="p-7">
                  <div className="w-11 h-11 rounded-full bg-white/8 border border-white/15 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white/90" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-white mb-4">{card.title}</h3>

                  <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/80 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

