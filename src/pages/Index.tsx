
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Portfolio } from '@/components/Portfolio';
import { Testimonials } from '@/components/Testimonials';
import { Blog } from '@/components/Blog';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { useToast } from '@/components/ui/use-toast';
import { Pricing } from '@/components/Pricing';
import { Map } from '@/components/Map';

const Index = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Welcome to ByteRender",
        description: "Innovative software solutions for your business.",
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [toast]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-2xl font-bold">
          <span className="text-primary">Byte</span>Render
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Pricing />
        <Map />
        <Testimonials />
        <ContactForm />
        <Blog />
      </main>
      
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

export default Index;
