
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
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

  const projects = [
    {
      title: "AI Chat Application",
      description: "A sophisticated chat application with OpenAI integration, real-time messaging, and intelligent response generation.",
      image: "/placeholder.svg",
      tags: ["React", "OpenAI", "Supabase", "TypeScript"],
      category: "AI",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and inventory management.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      category: "Web Dev",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management Dashboard",
      description: "Collaborative task management platform with real-time updates, team collaboration, and analytics.",
      image: "/placeholder.svg",
      tags: ["React", "Supabase", "Charts", "Real-time"],
      category: "Web Dev",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Content Generator",
      description: "Intelligent content generation tool using multiple AI models for blogs, social media, and marketing copy.",
      image: "/placeholder.svg",
      tags: ["React", "OpenAI", "Claude", "Gradio"],
      category: "AI",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website with smooth animations, contact forms, and CMS integration.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Framer Motion", "Tailwind", "CMS"],
      category: "Web Dev",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Advanced analytics platform with AI-powered insights, predictive modeling, and interactive visualizations.",
      image: "/placeholder.svg",
      tags: ["React", "D3.js", "Python", "Machine Learning"],
      category: "AI",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = ['All', 'Web Dev', 'AI'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <section ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of innovative solutions, from AI-powered applications to modern web platforms
            </p>
          </div>

          {/* Filter Buttons */}
          <div className={`flex justify-center mb-12 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="flex space-x-2 bg-secondary/50 p-2 rounded-full">
              {filters.map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "ghost"}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all duration-200 ${
                    activeFilter === filter
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-white/10'
                  }`}
                >
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h2 className={`text-2xl font-semibold mb-8 text-center text-primary ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {filteredProjects.filter(project => project.featured).map((project, index) => (
                <div 
                  key={index}
                  className={`group glass-card p-0 overflow-hidden hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl opacity-50">🚀</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button size="sm" className="flex-1">
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        GitHub
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.filter(project => !project.featured).map((project, index) => (
              <div 
                key={index}
                className={`group glass-card p-0 overflow-hidden hover:scale-105 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-gradient-to-br from-purple-500/10 to-blue-500/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl opacity-30">
                      {project.category === 'AI' ? '🧠' : '💻'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1 text-xs">
                      Live
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 text-xs">
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Have a Project in Mind?</h3>
              <p className="text-muted-foreground mb-6">
                Let's collaborate to bring your vision to life with modern technologies and innovative solutions.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Start Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
