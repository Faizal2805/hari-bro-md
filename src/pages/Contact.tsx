
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "hello@faizalbasha.dev",
      link: "mailto:hello@faizalbasha.dev"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 XX XX XX XXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: "📍",
      title: "Location",
      value: "India",
      link: null
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/faizalbasha",
      link: "https://linkedin.com/in/faizalbasha"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <section ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Let's Work Together
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Get in touch and let's discuss how we can create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-white/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="bg-background/50 border-white/20 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Send Message
                  </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-muted-foreground text-center">
                    Or reach out directly via email or social media
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="glass-card p-8">
                <h2 className="text-2xl font-semibold mb-6 text-primary">Get in Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-xl">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">{info.title}</h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">Why Work With Me?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <div>
                      <h4 className="font-medium">Quick Response</h4>
                      <p className="text-sm text-muted-foreground">I typically respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <div>
                      <h4 className="font-medium">Clear Communication</h4>
                      <p className="text-sm text-muted-foreground">Regular updates throughout the project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <div>
                      <h4 className="font-medium">Quality Guarantee</h4>
                      <p className="text-sm text-muted-foreground">100% satisfaction or your money back</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 text-lg">✓</span>
                    <div>
                      <h4 className="font-medium">Post-Launch Support</h4>
                      <p className="text-sm text-muted-foreground">Ongoing support and maintenance</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-8 text-center">
                <div className="mb-4">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Book a free 30-minute consultation to discuss your project
                </p>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Schedule Free Call
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
