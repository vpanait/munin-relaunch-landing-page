import { Header } from "@/components/Header";
import { HeroVideo } from "@/components/HeroVideo";
import { Understanding } from "@/components/Understanding";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroVideo />
        <Understanding />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
