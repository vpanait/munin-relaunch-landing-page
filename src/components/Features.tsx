import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, LayoutTemplate, MessageCircle } from "lucide-react";

const features = [
  {
    title: "Client-ready outputs",
    description:
      "Leave every call with: Follow-up email draft, Action items, Meeting summary, Notes + extracted data from your template.",
    icon: Mail,
  },
  {
    title: "Templates that standardize your process",
    description:
      "Create and reuse templates so every meeting captures the same key details, risk profile changes, goals, decisions, next steps, and anything else you care about.",
    icon: LayoutTemplate,
  },
  {
    title: "A client profile you can ask quick questions to",
    description:
      "Every client gets a clean history: past meetings, key details, and uploads, plus client-level chat for specific facts you don't want to hunt for.",
    icon: MessageCircle,
  },
];

const exampleQuestions = [
  "What are the names of their kids?",
  "Do they have a dog?",
  "Which team do they support?",
];

export const Features = () => {
  return (
    <section id="features" className="relative py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Features
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary mb-5">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {feature.description}
              </p>
              {index === 2 && (
                <p className="mt-4 text-sm text-muted-foreground italic">
                  e.g. &ldquo;{exampleQuestions[0]}&rdquo; &ldquo;
                  {exampleQuestions[1]}&rdquo; &ldquo;{exampleQuestions[2]}&rdquo;
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Upgrade reason: Go Professional */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 max-w-2xl mx-auto text-center p-8 rounded-2xl bg-primary/5 border border-primary/10"
        >
          <p className="text-foreground font-medium mb-2">
            Want it done while the meeting is happening?
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Professional includes live transcription and live template filling,
            so you can watch your structure get completed in real time.
          </p>
          <Button asChild className="rounded-full px-6">
            <a href="#pricing">Go Professional</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
