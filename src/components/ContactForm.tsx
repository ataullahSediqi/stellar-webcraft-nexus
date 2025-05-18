
import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Replace this with your email - the one you want to receive form submissions
  const formSubmitEmail = "your@email.com"; // REPLACE THIS WITH YOUR EMAIL

  const validateField = (name: keyof FormData, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';
      case 'email':
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Valid email is required';
      case 'subject':
        return value.trim() ? '' : 'Subject is required';
      case 'message':
        return value.trim().length >= 10 ? '' : 'Message should be at least 10 characters';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Live validation
    const fieldName = name as keyof FormData;
    const errorMessage = validateField(fieldName, value);
    setErrors({ ...errors, [name]: errorMessage });
  };

  const validateForm = (): boolean => {
    // Validate all fields
    const newErrors: FormErrors = {};
    let isValid = true;
    
    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const errorMessage = validateField(key, formData[key]);
      if (errorMessage) {
        newErrors[key] = errorMessage;
        isValid = false;
      }
    });
    
    setErrors(newErrors);
    
    if (!isValid) {
      toast({
        title: "Error",
        description: "Please fix the errors in the form",
        variant: "destructive"
      });
    }
    
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    // Submit form
    setIsSubmitting(true);
    
    // The form will be submitted to formsubmit.co via HTML form action
    // We just need to show feedback to the user
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. We'll get back to you soon.",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSuccess(false);
      }, 2000);
    }, 800);
  };

  return (
    <section id="contact" className="section bg-secondary">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title text-center">
            Get <span className="gradient-text">In Touch</span>
          </h2>
          <p className="section-subtitle text-center mx-auto">
            Have a project in mind or want to learn more about our services? Fill out the form below and we'll get back to you promptly.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <AnimatedSection className="order-2 lg:order-1">
            <div className="bg-card rounded-xl border border-border p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:hello@byterender.com" className="text-muted-foreground hover:text-primary">
                      hello@byterender.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <a href="tel:+12345678901" className="text-muted-foreground hover:text-primary">
                      +1 (234) 567-8901
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <address className="not-italic text-muted-foreground">
                      123 Tech Avenue<br />
                      San Francisco, CA 94107
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-3">Business Hours</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 lg:order-2">
            <div className="bg-card rounded-xl border border-border p-6 h-full">
              <form action={`https://formsubmit.co/${formSubmitEmail}`} method="POST" onSubmit={handleSubmit}>
                {/* FormSubmit configuration */}
                <input type="hidden" name="_subject" value="New submission from ByteRender website!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                <input type="hidden" name="_next" value={window.location.href} />
                
                <div className="space-y-4">
                  <div>
                    <Input
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(errors.name && 'border-destructive')}
                      disabled={isSubmitting || isSuccess}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(errors.email && 'border-destructive')}
                      disabled={isSubmitting || isSuccess}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <Input
                      placeholder="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={cn(errors.subject && 'border-destructive')}
                      disabled={isSubmitting || isSuccess}
                    />
                    {errors.subject && (
                      <p className="text-destructive text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={cn('min-h-[150px] resize-none', errors.message && 'border-destructive')}
                      disabled={isSubmitting || isSuccess}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs mt-1">{errors.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting || isSuccess}
                  >
                    {isSubmitting ? 'Sending...' : isSuccess ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Message Sent</span>
                      </div>
                    ) : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
