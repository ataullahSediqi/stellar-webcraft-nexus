
import { useCallback } from 'react';

interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
}

export function useScrollTo() {
  const scrollTo = useCallback((elementId: string, options: ScrollOptions = {}) => {
    const { offset = 0, behavior = 'smooth' } = options;
    
    const element = document.getElementById(elementId);
    if (!element) return;

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior,
    });
  }, []);

  return scrollTo;
}
