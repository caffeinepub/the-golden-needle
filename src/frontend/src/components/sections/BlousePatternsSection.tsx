import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function BlousePatternsSection() {
  const patterns = [
    {
      image: '/assets/generated/golden-needle-blouse-pattern-boatneck.dim_800x800.png',
      alt: 'Elegant boat neck blouse pattern with wide neckline and short sleeves',
      name: 'Boat Neck Blouse',
      description: 'A timeless classic featuring a wide, horizontal neckline that elegantly frames the shoulders. Perfect for sarees and lehengas.',
    },
    {
      image: '/assets/generated/golden-needle-blouse-pattern-uback.dim_800x800.png',
      alt: 'Deep U-back blouse pattern with dramatic back design',
      name: 'Deep U-Back Blouse',
      description: 'Make a statement with this dramatic deep U-shaped back design. Ideal for special occasions and festive wear.',
    },
    {
      image: '/assets/generated/golden-needle-blouse-pattern-keyhole.dim_800x800.png',
      alt: 'Keyhole back blouse pattern with elegant cutout detail',
      name: 'Keyhole Back Blouse',
      description: 'A sophisticated design featuring a teardrop-shaped cutout at the back. Adds a touch of modern elegance to traditional attire.',
    },
    {
      image: '/assets/generated/golden-needle-blouse-pattern-puffsleeve.dim_800x800.png',
      alt: 'Puff sleeve blouse pattern with voluminous gathered sleeves',
      name: 'Puff Sleeve Blouse',
      description: 'Romantic and trendy with voluminous gathered sleeves. This style adds a contemporary twist to traditional outfits.',
    },
    {
      image: '/assets/generated/golden-needle-blouse-pattern-princesscut.dim_800x800.png',
      alt: 'Princess cut blouse pattern with fitted silhouette and vertical seams',
      name: 'Princess Cut Blouse',
      description: 'Features vertical seam lines that create a flattering, fitted silhouette. Offers excellent shape and structure.',
    },
    {
      image: '/assets/generated/golden-needle-blouse-pattern-highneck.dim_800x800.png',
      alt: 'High neck blouse pattern with elegant collar design',
      name: 'High Neck Blouse',
      description: 'An elegant high-collar design that exudes sophistication. Perfect for formal events and traditional ceremonies.',
    },
  ];

  return (
    <section id="blouse-patterns" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trending Blouse Patterns
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular blouse designs. Each pattern is crafted with precision to enhance your style and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {patterns.map((pattern, index) => (
            <Card key={index} className="border-border/50 hover:border-golden/50 transition-all hover:shadow-lg overflow-hidden group">
              <div className="aspect-square overflow-hidden bg-muted/30">
                <img
                  src={pattern.image}
                  alt={pattern.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{pattern.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {pattern.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
