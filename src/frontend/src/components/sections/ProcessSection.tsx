import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Ruler, Scissors, CheckCircle } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'Share your design ideas and preferences. We discuss fabrics, styles, and measurements.',
    },
    {
      icon: Ruler,
      title: 'Measurements',
      description: 'Precise measurements are taken to ensure a perfect fit for your body type.',
    },
    {
      icon: Scissors,
      title: 'Stitching',
      description: 'Our expert tailors craft your garment with attention to every detail and finish.',
    },
    {
      icon: CheckCircle,
      title: 'Final Fitting',
      description: 'Try on your garment and we make any final adjustments for the perfect fit.',
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our simple four-step process ensures you get the perfect garment every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative border-border/50">
                <CardHeader>
                  <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-golden text-golden-foreground flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-golden/10 flex items-center justify-center mb-4 mt-2">
                    <Icon className="h-6 w-6 text-golden" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
