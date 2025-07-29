
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: "🔧",
      title: "Website Development",
      description: "Custom, responsive websites built with modern frameworks like React, Next.js, and TypeScript.",
      features: [
        "Responsive Design",
        "Performance Optimization",
        "SEO-Friendly Structure",
        "Modern UI/UX",
        "Cross-browser Compatibility"
      ],
      startingPrice: "$800",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: "🧠",
      title: "AI Integration",
      description: "Intelligent features powered by OpenAI, Claude, and custom AI models to enhance user experience.",
      features: [
        "Chatbots & Assistants",
        "Content Generation",
        "Data Analysis",
        "Automated Workflows",
        "Custom AI Solutions"
      ],
      startingPrice: "$1200",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: "🌐",
      title: "SEO Optimization",
      description: "Complete SEO strategy implementation to improve your website's visibility and search rankings.",
      features: [
        "Technical SEO Audit",
        "On-page Optimization",
        "Performance Enhancement",
        "Meta Tags & Schema",
        "Analytics Setup"
      ],
      startingPrice: "$500",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: "⚙️",
      title: "API Integration",
      description: "Seamless integration of third-party services, payment gateways, and custom API development.",
      features: [
        "Payment Processing",
        "Third-party APIs",
        "Custom Backend APIs",
        "Database Integration",
        "Real-time Features"
      ],
      startingPrice: "$600",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start with understanding your goals, target audience, and project requirements.",
      icon: "🎯"
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Creating wireframes, design mockups, and technical architecture for your project.",
      icon: "📐"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your solution using best practices with continuous testing and feedback.",
      icon: "⚡"
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Deploying your project and providing ongoing support and optimization.",
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Services I Offer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive web development solutions that drive results and exceed expectations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group glass-card p-8 hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-2xl mr-4`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-primary font-semibold">Starting from {service.startingPrice}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <span className="text-green-500 text-sm">✓</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}>
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className={`mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="text-3xl font-bold text-center mb-4 text-primary">My Process</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A proven methodology that ensures quality results and clear communication throughout your project
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`text-center ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-3xl mb-4">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="glass-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 gradient-text">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how I can help bring your vision to life with cutting-edge technology and expert craftsmanship.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8">
                  Get Free Consultation
                </Button>
                <Button size="lg" variant="outline" className="px-8">
                  View Portfolio
                </Button>
              </div>

              <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Quick Response Time</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Post-Launch Support</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;
