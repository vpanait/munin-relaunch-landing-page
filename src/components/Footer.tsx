export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <span className="text-muted-foreground">·</span>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <span className="text-muted-foreground">·</span>
        </div>
        <p className="text-center text-muted-foreground text-sm mt-6">
          &copy; {new Date().getFullYear()} Munin AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
