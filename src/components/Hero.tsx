
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useScrollTo } from '@/hooks/useScrollTo';
import { ArrowRight, Code, CodeSquare } from 'lucide-react';

export function Hero() {
  const scrollTo = useScrollTo();
  const backgroundRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (backgroundRef.current) {
        // Parallax effect
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen pt-32 pb-16 md:pb-32">
      {/* Background SVG Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 animated-background" />
        <svg
          ref={backgroundRef}
          className="absolute w-full h-full opacity-40 dark:opacity-20"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeOpacity="0.1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        {/* Shape Decorators */}
        <div className="absolute top-1/3 -left-16 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-16 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        
        {/* Floating Icon */}
        <div className="mb-6 p-3 rounded-2xl bg-primary/10 border border-primary/20 animate-float">
          <CodeSquare className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 max-w-4xl">
          Transform Your Vision Into <span className="gradient-text">Powerful Software</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
          We build scalable, future-ready software solutions that drive innovation and business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2" onClick={() => scrollTo('services')}>
            Explore Our Services
            <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo('portfolio')}>
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 max-w-4xl w-full">
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '200+', label: 'Projects Delivered' },
            { value: '99%', label: 'Client Satisfaction' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
