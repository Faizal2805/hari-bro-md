import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function RecentWorks() {
  const recentWorks = [
    {
      id: 1,
      title: "Digital Transformation for TechCorp",
      category: "Digital Strategy",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Complete digital overhaul resulting in 40% efficiency improvement and $2M cost savings.",
      tags: ["Strategy", "Technology", "Process Optimization"],
      link: "#"
    },
    {
      id: 2,
      title: "Market Expansion Strategy",
      category: "Business Growth",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Helped expand into 3 new markets, increasing revenue by 180% within 12 months.",
      tags: ["Market Research", "Strategic Planning", "Growth"],
      link: "#"
    },
    {
      id: 3,
      title: "Operational Excellence Program",
      category: "Operations",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Streamlined operations for manufacturing company, reducing costs by 25%.",
      tags: ["Operations", "Lean Management", "Cost Reduction"],
      link: "#"
    },
    {
      id: 4,
      title: "Leadership Development Initiative",
      category: "Human Resources",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Developed leadership pipeline for Fortune 500 company with 95% retention rate.",
      tags: ["Leadership", "Training", "Development"],
      link: "#"
    },
    {
      id: 5,
      title: "Risk Management Framework",
      category: "Risk & Compliance",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Implemented comprehensive risk framework protecting $50M in assets.",
      tags: ["Risk Management", "Compliance", "Security"],
      link: "#"
    },
    {
      id: 6,
      title: "Customer Experience Transformation",
      category: "Customer Success",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Redesigned customer journey, improving satisfaction scores by 60%.",
      tags: ["Customer Experience", "Service Design", "Analytics"],
      link: "#"
    }
  ];

  return (
    <section id="recentworks" className="py-20 bg-white fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 slide-up">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border-2 border-blue-500 text-blue-600 rounded-full text-sm font-medium mb-6">
            Recent Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Recent Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and success stories. Each project represents our commitment to delivering exceptional results and driving meaningful business transformation.
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recentWorks.map((work, index) => (
            <Card key={work.id} className={`group hover:shadow-xl bg-white transition-all duration-300 overflow-hidden border-0 shadow-lg ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={work.image}
                  alt={work.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {work.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ExternalLink className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {work.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {work.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {work.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium group/btn"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bounce-in" style={{animationDelay: '0.8s'}}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            View All Projects
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
