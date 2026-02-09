import { motion } from "motion/react";
import { Mic, FileText, Send } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Capture",
    description:
      "Use Munin during a meeting. Your template guides what gets captured.",
    icon: Mic,
  },
  {
    step: 2,
    title: "Generate",
    description:
      "Right after the call, Munin creates everything you need: extracted data from your template, structured notes, action items, a meeting summary, and a follow-up email draft.",
    icon: FileText,
  },
  {
    step: 3,
    title: "Follow up",
    description:
      "Send the draft, refine the notes if needed, and keep everything stored under the client, so next time you're not starting from zero.",
    icon: Send,
  },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From meeting to follow-up in under 5 minutes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-6">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mt-1 mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
