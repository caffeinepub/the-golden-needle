import { SiInstagram, SiFacebook } from 'react-icons/si';
import { Heart } from 'lucide-react';

export function SiteFooter() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/golden-needle-logo.dim_512x512.png"
                alt="The Golden Needle Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-bold text-golden">The Golden Needle</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Expert tailoring services for blouses, ghagras, dresses, and more. Crafting elegance, one stitch at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {['Services', 'Process', 'Gallery', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm text-muted-foreground hover:text-golden transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/the_goolden_needal?igsh=MWxoN2YwbHVvZXJnZQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-golden transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-golden transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026. Built with <Heart className="h-4 w-4 text-golden fill-golden" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-golden hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
