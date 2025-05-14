
import { AnimatedSection } from './AnimatedSection';
import { CheckCircle, Clock, Award, Users, ShieldCheck, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: 'Over 200+ successful projects delivered on time and within budget.'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Streamlined processes that deliver high-quality solutions faster.'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Multiple awards for excellence in software development.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Senior developers and engineers with over 10+ years experience.'
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    description: 'Advanced security measures implemented in every solution.'
  },
  {
    icon: Code,
    title: 'Modern Tech Stack',
    description: 'We use the latest technologies to build future-proof solutions.'
  }
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">
            Why <span className="gradient-text">Choose Us</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            We combine technical expertise with industry knowledge to deliver solutions that
            drive real business value and competitive advantage.
          </p>
        </AnimatedSection>

        {/* Trust Badges */}
        <AnimatedSection className="flex flex-wrap justify-center gap-6 md:gap-12 my-12">
          {['ISO 27001', 'GDPR Compliant', 'CMMI Level 5', 'AWS Partner', 'Microsoft Gold'].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 bg-accent rounded-full px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{badge}</span>
            </div>
          ))}
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Client Numbers */}
        <AnimatedSection className="mt-16">
          <div className="rounded-2xl border border-border p-8 bg-card">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '98%', label: 'Client Retention' },
                { value: '500+', label: 'Happy Clients' },
                { value: '15+', label: 'Countries Served' },
                { value: '50+', label: 'Industry Experts' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
