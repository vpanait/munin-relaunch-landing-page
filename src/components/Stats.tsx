import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "B+", label: "Assets Under Management", prefix: "$" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 500, suffix: "+", label: "Satisfied Clients" },
];

const Counter = ({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl lg:text-6xl font-bold text-background">
      {prefix}{count}{suffix}
    </div>
  );
};

export const Stats = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto text-balance">
            Our track record speaks for itself. We've built lasting relationships through consistent performance and unwavering commitment.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <Counter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              <p className="text-sm lg:text-base mt-2 opacity-80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
