
import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  triggerOnce?: boolean;
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  triggerOnce = true,
}: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  });

  const directionClasses = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8',
    none: 'scale-95',
  };

  const animationClass = isIntersecting
    ? 'opacity-100 transform-none'
    : `opacity-0 ${directionClasses[direction]}`;

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700',
        animationClass,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
