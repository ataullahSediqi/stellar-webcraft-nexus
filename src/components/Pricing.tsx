
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, CircleDollarSign } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { cn } from '@/lib/utils';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Startup',
    price: '$1,999',
    description: 'Perfect for startups and small businesses looking to establish their digital presence.',
    features: [
      'Custom Website Development',
      'Responsive Design',
      'Basic SEO Optimization',
      '1 Month Support',
      'Up to 5 Pages',
    ],
    buttonText: 'Get Started',
  },
  {
    name: 'Business',
    price: '$4,999',
    description: 'Comprehensive solutions for established businesses looking to scale their digital operations.',
    features: [
      'Full-Stack Web Application',
      'API Development & Integration',
      'Advanced SEO & Analytics',
      '3 Months Support & Maintenance',
      'Custom Admin Dashboard',
      'User Authentication System',
    ],
    highlight: true,
    buttonText: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large enterprises with complex requirements and high scalability needs.',
    features: [
      'Complex Software Architecture',
      'Microservices Development',
      'High-Performance Optimization',
      'Ongoing Support & Maintenance',
      'Dedicated Project Manager',
      'Security Audits & Compliance',
      'Custom Integration Solutions',
    ],
    buttonText: 'Contact Us',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="section bg-background relative overflow-hidden">
      <div className="container-tight">
        <AnimatedSection>
          <h2 className="section-title text-center">Transparent Pricing Plans</h2>
          <p className="section-subtitle text-center mx-auto">
            Choose the perfect plan for your business needs with our transparent pricing structure.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection key={plan.name} delay={index * 100} direction="up">
              <Card className={cn(
                "relative h-full transition-all duration-300 hover:translate-y-[-5px] neo-box-hover overflow-hidden border-border/50",
                plan.highlight && "border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              )}>
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-primary h-1" />
                )}
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <CircleDollarSign className="h-5 w-5 text-primary" />
                    {plan.name}
                  </CardTitle>
                  <div className="mt-3">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== 'Custom' && <span className="text-muted-foreground ml-1">/project</span>}
                  </div>
                  <CardDescription className="mt-3">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className={cn("w-full", plan.highlight ? "" : "variant-outline")}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-16 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            All plans include our core development practices: responsive design, performance optimization, 
            and adherence to modern web standards. Need a custom solution? Contact us for a personalized quote.
          </p>
        </AnimatedSection>
      </div>
      
      <div className="absolute -z-10 inset-0 opacity-5 bg-futuristic-grid pointer-events-none" />
    </section>
  );
}
