import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Scissors, Shirt, Sparkles, Ruler } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Shirt,
      title: 'Blouse Stitching',
      description: 'Custom-fitted blouses with intricate designs and perfect finishing. From traditional to contemporary styles.',
    },
    {
      icon: Sparkles,
      title: 'Ghagra Tailoring',
      description: 'Elegant ghagras crafted with attention to detail. Perfect for weddings, festivals, and special occasions.',
    },
    {
      icon: Scissors,
      title: 'Dress Making',
      description: 'Beautiful dresses tailored to your measurements. From casual wear to formal evening gowns.',
    },
    {
      icon: Ruler,
      title: 'One-Piece Outfits',
      description: 'Stylish one-piece garments designed for comfort and elegance. Perfect fit guaranteed.',
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Our Tailoring Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert craftsmanship for all your stitching needs. Each garment is made with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-golden/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-golden/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-golden" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
