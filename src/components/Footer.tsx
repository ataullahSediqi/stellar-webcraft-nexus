
import { useScrollTo } from '@/hooks/useScrollTo';
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Instagram, Linkedin, Github, Mail } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Custom Software', href: '#services' },
      { label: 'Mobile Apps', href: '#services' },
      { label: 'Cloud Solutions', href: '#services' },
      { label: 'Data Analytics', href: '#services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Case Studies', href: '#portfolio' },
      { label: 'FAQs', href: '#' },
      { label: 'Support', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export function Footer() {
  const scrollTo = useScrollTo();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      scrollTo(targetId);
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block">
              <div className="flex items-center font-bold text-2xl">
                <span className="text-primary">Dev</span>Matrix
              </div>
            </a>
            
            <p className="mt-4 text-muted-foreground">
              Building innovative software solutions that transform businesses and drive digital success.
            </p>
            
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((column, colIndex) => (
            <div key={colIndex}>
              <h4 className="font-semibold text-lg mb-4">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DevMatrix Software. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
