
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import {
  Code,
  BarChart,
  Shield,
  Smartphone,
  Layers,
  Cloud
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'We build tailored software solutions designed to address your unique business challenges and operational needs.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Create stunning, performant mobile applications that work flawlessly across iOS and Android platforms.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing with scalable, secure and cost-effective infrastructure solutions.',
    color: 'text-sky-500',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
  },
  {
    icon: BarChart,
    title: 'Data Analytics & BI',
    description: 'Transform your raw data into actionable insights with our advanced analytics and business intelligence services.',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your business with comprehensive security assessments, threat detection and remediation strategies.',
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
  },
  {
    icon: Layers,
    title: 'DevOps & Infrastructure',
    description: 'Accelerate your development lifecycle with our automated CI/CD pipelines and infrastructure automation.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
  },
];

export function Services() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <section id="services" className="section bg-secondary">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            We deliver comprehensive software solutions tailored to meet the specific needs of your business,
            from custom development to cloud-native applications.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div
                className={cn(
                  'h-full p-6 rounded-xl border transition-all duration-300',
                  'hover:shadow-lg bg-card hover:-translate-y-1',
                  activeService === index ? service.borderColor : 'border-border'
                )}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div
                  className={cn(
                    'w-12 h-12 rounded-lg flex items-center justify-center mb-5',
                    service.bgColor
                  )}
                >
                  <service.icon className={cn('w-5 h-5', service.color)} />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
