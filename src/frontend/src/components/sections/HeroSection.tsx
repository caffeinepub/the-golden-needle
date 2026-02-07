import { BrandButton } from '../BrandButton';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-golden/5 to-background">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Crafting Elegance,{' '}
              <span className="text-golden">One Stitch at a Time</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Expert tailoring services for blouses, ghagras, dresses, and one-pieces. 
              We bring your vision to life with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <BrandButton size="lg" onClick={scrollToContact}>
                Get a Stitching Quote
              </BrandButton>
              <BrandButton
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Services
              </BrandButton>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img
                src="/assets/generated/golden-needle-hero.dim_1600x600.png"
                alt="The Golden Needle - Expert Tailoring Services"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-golden/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-golden/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
