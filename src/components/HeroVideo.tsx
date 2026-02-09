import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) video.play().catch(console.error);
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <img
            src="/hero-image.jpg"
            alt="Professional workspace"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      <div className="absolute inset-0 z-10 flex items-end justify-start px-6 lg:px-12 py-16 lg:py-16">
        <div className="max-w-2xl lg:max-w-3xl container mx-auto">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-sm font-medium text-white/90 tracking-wide">
              Built for advisor workflows · Your templates, your structure ·
              Client-level history you can search
            </p>
            <h1 className="text-3xl lg:text-5xl xl:text-6xl font-serif font-bold text-white leading-tight">
              Turn client meetings into structured follow-ups and searchable
              client profiles, automatically.
            </h1>
            <p className="text-base lg:text-lg text-white/90 leading-relaxed">
              Munin is built for financial advisors. Capture exactly what
              matters during calls, keep a clean client history you can actually
              use, and leave every meeting with a ready-to-send follow-up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#pricing">Subscribe</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-white/60 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#pricing">See pricing</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
