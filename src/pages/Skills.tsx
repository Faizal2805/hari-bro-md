
import { useState, useEffect, useRef } from 'react';
import Navigation from '@/components/Navigation';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        { name: "React", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Next.js", level: 90, color: "from-gray-600 to-gray-700" },
        { name: "TypeScript", level: 88, color: "from-blue-600 to-blue-700" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-500 to-teal-600" },
        { name: "JavaScript", level: 94, color: "from-yellow-500 to-yellow-600" },
        { name: "HTML/CSS", level: 96, color: "from-orange-500 to-orange-600" }
      ]
    },
    {
      title: "Backend & Database",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-500 to-green-600" },
        { name: "Supabase", level: 90, color: "from-emerald-500 to-emerald-600" },
        { name: "PostgreSQL", level: 82, color: "from-blue-700 to-blue-800" },
        { name: "API Development", level: 88, color: "from-purple-500 to-purple-600" },
        { name: "Authentication", level: 86, color: "from-red-500 to-red-600" }
      ]
    },
    {
      title: "AI & Integration",
      icon: "🧠",
      skills: [
        { name: "OpenAI APIs", level: 92, color: "from-green-400 to-green-500" },
        { name: "Gradio", level: 85, color: "from-orange-400 to-orange-500" },
        { name: "AI Model Integration", level: 88, color: "from-purple-400 to-purple-500" },
        { name: "Prompt Engineering", level: 90, color: "from-pink-400 to-pink-500" },
        { name: "Machine Learning", level: 78, color: "from-indigo-400 to-indigo-500" }
      ]
    },
    {
      title: "Tools & Deployment",
      icon: "🚀",
      skills: [
        { name: "Git & GitHub", level: 94, color: "from-gray-700 to-gray-800" },
        { name: "Vercel", level: 90, color: "from-black to-gray-800" },
        { name: "Docker", level: 75, color: "from-blue-400 to-blue-500" },
        { name: "AWS", level: 70, color: "from-orange-400 to-orange-500" },
        { name: "Performance Optimization", level: 87, color: "from-green-600 to-green-700" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-24 pb-16">
        <section ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              My Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and intelligent web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className={`glass-card p-8 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{category.icon}</span>
                  <h3 className="text-2xl font-semibold text-primary">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out group-hover:scale-105`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4 text-primary">What This Means for You</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">🎯 Strategic Approach</h4>
                  <p className="text-muted-foreground">I choose the right technology stack for your specific needs, ensuring scalability and maintainability.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">⚡ Modern Solutions</h4>
                  <p className="text-muted-foreground">Stay ahead with cutting-edge technologies and best practices that future-proof your applications.</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-lg">🔧 Full-Stack Capability</h4>
                  <p className="text-muted-foreground">From frontend to backend to AI integration, I handle every aspect of your project seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Skills;
