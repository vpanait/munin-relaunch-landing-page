export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">CAERUS</h3>
            <p className="text-muted-foreground leading-relaxed">
              Strategic asset management for a prosperous future.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#services" className="hover:text-white transition-colors">Portfolio Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Wealth Preservation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Strategic Planning</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-semibold mb-6 text-lg">Legal</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/disclosures" className="hover:text-white transition-colors">Disclosures</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-muted-foreground/20 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Caerus Asset Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
