import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HowWeProtectDocuments } from "@/components/HowWeProtectDocuments";
import { PrivacyDataHandling } from "@/components/PrivacyDataHandling";
import { ComplianceRoadmap } from "@/components/ComplianceRoadmap";
import { Shield } from "lucide-react";
import { motion } from "motion/react";

const SecurityAndCompliance = () => {
  return (
    <div className="min-h-screen">
      <Header hideNavLinks={true} />
      <main className="pt-16">
        <section className="bg-background py-16 lg:py-24">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="mx-auto w-14 h-14 rounded-full border border-border/40 bg-muted/20 flex items-center justify-center mb-8">
                <Shield className="w-7 h-7 text-foreground/80" />
              </div>
              <h1 className="text-4xl lg:text-7xl font-serif font-bold tracking-tight text-foreground">
                Security, end to end
              </h1>
              <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Munin protects your content with strong encryption, granular access controls, and privacy-first data
                practices
              </p>
            </motion.div>
          </div>
        </section>
        <HowWeProtectDocuments />
        <PrivacyDataHandling />
        <ComplianceRoadmap />
      </main>
      <Footer />
    </div>
  );
};

export default SecurityAndCompliance;

