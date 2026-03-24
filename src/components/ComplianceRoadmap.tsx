import { motion } from "motion/react";
import { Check, Clock } from "lucide-react";

const leftBullets = [
  "GDPR, CCPA, and PDPL compliant data handling",
  "Full activity audit trail for every document",
  "AES-256-GCM encryption at rest, TLS in transit",
  "Row-Level Security on every database table",
  "Hosted on SOC 2 certified infrastructure",
];

const rightBullets = [
  "SOC 2 Type 2 Certification 2026",
  "ISO 27001 Certification 2027",
  "Annual Penetration Testing Program 2026",
  "Public Bug Bounty Program 2027",
];

export const ComplianceRoadmap = () => {
  return (
    <section id="compliance" className="relative py-20 lg:py-28 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(29,78,216,0.18),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.14),transparent_45%)]" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl lg:text-5xl font-serif font-bold tracking-tight">
            Compliance and Roadmap
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-sm lg:text-base">
            We are transparent about where we are today and where we are headed. Building trust means being
            honest about our security journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8"
          >
            <h3 className="text-xl font-serif font-bold text-white mb-6">What We Do Today</h3>
            <ul className="space-y-3">
              {leftBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-2xl border border-dashed border-white/20 bg-white/3 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <h3 className="text-xl font-serif font-bold text-white">On Our Roadmap</h3>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs text-white/70">
                Planned
              </span>
            </div>
            <ul className="space-y-3">
              {rightBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/70 text-sm leading-relaxed">
                  <Clock className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

