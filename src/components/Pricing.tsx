import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    tagline: "Land",
    monthly: 39,
    annual: 29,
    popular: false,
    features: [
      "Templates",
      "Upload past calls (no cap)",
      "Client profile panel + AI chat",
      "Post-meeting outputs",
      "Calendar integrations (Google Calendar + Outlook/Microsoft 365)",
    ],
    cta: "Subscribe",
  },
  {
    name: "Professional",
    tagline: "Expand",
    monthly: 79,
    annual: 59,
    popular: true,
    features: [
      "Everything in Essentials, plus:",
      "Live transcription",
      "Dynamic checklist",
      "Priority support + onboarding session",
    ],
    cta: "Subscribe",
  },
  {
    name: "Enterprise",
    tagline: null,
    monthly: null,
    annual: null,
    popular: false,
    features: [
      "Custom needs, larger teams, or special requirements.",
    ],
    cta: "Contact us",
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Secure checkout via Stripe.<br />
            Monthly: cancel anytime (access continues
            until month ends).<br /> Annual: cancel renewal before your plan renews.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border-2 p-8 flex flex-col ${plan.popular
                  ? "border-primary bg-primary/5 shadow-lg scale-[1.02]"
                  : "border-border bg-card"
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-foreground">
                  {plan.name}
                  {plan.tagline && (
                    <span className="text-muted-foreground font-sans font-normal text-base">
                      {" "}
                      — {plan.tagline}
                    </span>
                  )}
                </h3>
                {plan.monthly != null && (
                  <div className="mt-3 flex items-baseline gap-2 flex-wrap">
                    <span className="text-2xl font-bold text-foreground">
                      ${plan.monthly}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / user / month billed monthly
                    </span>
                    <span className="text-foreground font-semibold">
                      ${plan.annual}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      / user / month billed annually
                    </span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant={plan.popular ? "default" : "outline"}
                className="w-full rounded-full"
              >
                <a href={plan.cta === "Contact us" ? "mailto:contact@munin.ai&subject=Munin AI Enterprise Pricing Inquiry" : "#pricing"}>
                  {plan.cta}
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
