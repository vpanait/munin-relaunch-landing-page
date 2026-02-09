import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoWhite from "/logo-white.png";
import logoBlack from "/logo-black.png";
import logoPrimary from "/logo-primary.png";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

interface HeaderProps {
  hideNavLinks?: boolean;
}

export const Header = ({ hideNavLinks = false }: HeaderProps) => {
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsHeroInView(entry.isIntersecting));
      },
      { threshold: 0, rootMargin: "-50px 0px 0px 0px" }
    );
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      observer.observe(heroSection);
    } else {
      setIsHeroInView(false)
    }


    return () => heroSection && observer.unobserve(heroSection);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeroInView
        ? "bg-transparent"
        : "bg-background/95 backdrop-blur-md border-b border-border"
        }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="/"
          className={`flex items-center gap-2 text-xl font-serif font-bold tracking-tight transition-colors ${isHeroInView ? "text-white" : "text-primary"
            }`}
        >
          <img src={isHeroInView ? logoWhite : logoPrimary} alt="Munin AI" className="h-auto w-8"  />
          MuninAI
        </a>

        {/* Desktop: center nav with dot separators */}
        <div className="hidden lg:flex items-center gap-1">
          {!hideNavLinks && navLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-1">
              {i > 0 && (
                <span
                  className={
                    isHeroInView ? "text-white/50 text-sm" : "text-secondary text-sm"
                  }
                >
                  ·
                </span>
              )}
              <a
                href={link.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isHeroInView
                  ? "text-white/85 hover:text-white hover:bg-white/10"
                  : "text-secondary/85 hover:text-secondary hover:bg-muted"
                  }`}
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* Desktop: right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#pricing"
            className={`text-sm font-medium transition-colors ${isHeroInView ? "text-white/85 hover:text-white" : "text-foreground/85 hover:text-foreground"
              }`}
          >
            Sign in
          </a>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="#pricing">Subscribe</a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-2">
          <Button asChild size="sm" className="rounded-full">
            <a href="#pricing">Subscribe</a>
          </Button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className={`p-2 rounded-lg transition-colors ${isHeroInView && !mobileMenuOpen
              ? "text-white hover:bg-white/10"
              : "text-foreground hover:bg-muted"
              }`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {!hideNavLinks && navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-foreground font-medium rounded-lg hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              className="px-4 py-3 text-muted-foreground font-medium rounded-lg hover:bg-muted"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
};
