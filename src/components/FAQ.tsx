import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What's the difference between Essentials and Professional?",
    a: "Essentials covers templates, client profiles + AI chat, uploads, calendar integrations, and post-meeting outputs. Professional adds live transcription and live template filling—it's the \"use it during the meeting\" plan.",
  },
  {
    q: "Do you support Teams, Zoom, and Google Meet?",
    a: "Yes, Munin supports meetings on Teams, Zoom, and Google Meet.",
  },
  {
    q: "Can I cancel anytime?",
    a: "If you're on monthly, yes—cancel anytime and you'll keep access until the end of the billing month. If you're on annual, your subscription runs until the end of the year, and you can cancel renewal before it renews.",
  },
  {
    q: "What's included in each plan?",
    a: "Each plan lists exactly what's included in the Pricing section above. If you're deciding: pick Essentials for post-meeting follow-up automation; pick Professional if you want live transcription and live template filling during the call.",
  },
  {
    q: "Can I export my outputs?",
    a: "Yes. If you ever want to switch platforms, you can export your data and outputs, and we'll help make the transition smooth.",
  },
  {
    q: "How do I get started?",
    a: "Create an account → (Optional) connect your calendar → run Munin in your next call or upload a past one.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="text-left font-medium">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
