
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { useScrollTo } from '@/hooks/useScrollTo';
import { cn } from '@/lib/utils';

export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactButton, setShowContactButton] = useState(true);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Hide contact button when near the contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactSectionTop = contactSection.getBoundingClientRect().top;
        setShowContactButton(contactSectionTop > 500);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {showContactButton && (
        <Button
          variant="default"
          size="icon"
          className={cn(
            "w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform",
            isVisible ? "scale-100" : "scale-0"
          )}
          onClick={() => scrollTo('contact')}
        >
          <MessageSquare size={20} />
        </Button>
      )}
      
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform",
          isVisible ? "scale-100" : "scale-0"
        )}
        onClick={handleScrollToTop}
      >
        <ArrowUp size={20} />
      </Button>
    </div>
  );
}
