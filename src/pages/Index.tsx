import { Header } from "@/components/Header";
import { HeroAnimated } from "@/components/HeroAnimated";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { Principles } from "@/components/Principles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { HeroVideo } from "@/components/HeroVideo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroVideo />
        {/* <HeroAnimated /> */}
        {/* <Hero /> */}
        <Services />
        <Stats />
        <About />
        <Principles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
