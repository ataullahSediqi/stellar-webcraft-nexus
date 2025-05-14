
import { useState, useEffect } from 'react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Services', target: 'services' },
  { label: 'Why Us', target: 'why-choose-us' },
  { label: 'Portfolio', target: 'portfolio' },
  { label: 'Blog', target: 'blog' },
  { label: 'Testimonials', target: 'testimonials' },
  { label: 'Contact', target: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (targetId: string) => {
    scrollTo(targetId, { offset: 80 });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3 blur-background shadow-sm' : 'py-5 bg-transparent'
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center font-bold text-xl">
          <span className="text-primary">Dev</span>Matrix
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleNavClick(item.target)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          
          <ThemeToggle />

          <Button onClick={() => handleNavClick('contact')}>
            Get in Touch
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden blur-background border-t border-border/50 py-4">
          <div className="container flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => handleNavClick(item.target)}
                className="text-foreground/80 hover:text-primary transition-colors text-left py-2"
              >
                {item.label}
              </button>
            ))}
            <Button onClick={() => handleNavClick('contact')} className="w-full mt-2">
              Get in Touch
            </Button>
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div
        className="progress-bar"
        style={{
          transform: isScrolled
            ? `scaleX(${Math.min(
                window.scrollY /
                  (document.documentElement.scrollHeight - window.innerHeight),
                1
              )})`
            : 'scaleX(0)',
        }}
      />
    </header>
  );
}
