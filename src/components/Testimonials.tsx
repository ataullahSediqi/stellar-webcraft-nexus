
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Play, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Sarah Johnson',
    position: 'CTO, TechGrowth',
    content: 'DevMatrix transformed our outdated systems into a modern, scalable platform that has dramatically improved our operational efficiency. Their team was professional, communicative, and delivered exceptional results.',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22200%22%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2280%22%20fill%3D%22%234A89DC%22%2F%3E%3Cpath%20d%3D%22M100%2C50%20a50%2C50%200%200%201%200%2C100%20a50%2C50%200%200%201%200%2C-100%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E',
    video: false
  },
  {
    name: 'Michael Chen',
    position: 'Product Director, InnovateCorp',
    content: 'Working with DevMatrix has been a game-changer for our business. They not only built our mobile app on time and within budget but also provided strategic insights that helped us launch successfully. I would highly recommend their services.',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22200%22%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2280%22%20fill%3D%22%239B59B6%22%2F%3E%3Cpath%20d%3D%22M100%2C50%20a50%2C50%200%200%201%200%2C100%20a50%2C50%200%200%201%200%2C-100%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E',
    video: true
  },
  {
    name: 'Emily Rodriguez',
    position: 'CEO, EcoSolutions',
    content: 'From the initial consultation to the final delivery, DevMatrix exhibited exceptional professionalism and technical expertise. The custom CRM they built for us has revolutionized how we manage customer relationships.',
    image: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22200%22%20height%3D%22200%22%20viewBox%3D%220%200%20200%20200%22%3E%3Ccircle%20cx%3D%22100%22%20cy%3D%22100%22%20r%3D%2280%22%20fill%3D%22%234ECDC4%22%2F%3E%3Cpath%20d%3D%22M100%2C50%20a50%2C50%200%200%201%200%2C100%20a50%2C50%200%200%201%200%2C-100%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E',
    video: false
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Don't take our word for it – hear from some of our satisfied clients about their experiences working with us.
          </p>
        </AnimatedSection>

        <div className="mt-10 relative">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="relative bg-card rounded-2xl border border-border overflow-hidden p-8 md:p-10">
              <Quote className="absolute top-6 left-6 w-20 h-20 text-primary/10" />

              <div className="relative">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
                  <div className="flex-shrink-0">
                    {testimonials[currentIndex].video ? (
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Button size="icon" variant="secondary" className="w-10 h-10 rounded-full">
                            <Play className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-lg md:text-xl mb-4 italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>
                    <div className="font-semibold">{testimonials[currentIndex].name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrev}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    currentIndex === index ? "w-6 bg-primary" : "bg-primary/30"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
