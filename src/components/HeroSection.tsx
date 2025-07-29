import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-white py-24 overflow-hidden">
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.5] via-transparent to-purple-600/[0.04]"></div>
      <div className="absolute top-0 left-28 w-96 h-96 bg-gradient-to-br from-blue-500/[0.7] to-transparent rounded-full blur-3xl "></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-500/[1] to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight animate-fade-in-up delay-200">
                Transforming
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-gradient-x">
                  {" "}Businesses{" "}
                </span>
                Through Innovation
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg animate-fade-in-up delay-400">
                Transforming businesses through innovative solutions and expert guidance. Your success is our mission.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Start Your Transformation
              </Button>
              <Button size="lg" variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 hover:text-blue-800 hover:bg-blue-100 px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Explore Our Solutions
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up delay-800">
              <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 group">
                <Lightbulb className="w-8 h-8 text-blue-600 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <p className="font-semibold text-slate-800">Innovative Solutions</p>
              </Card>
              <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 group delay-100">
                <Target className="w-8 h-8 text-purple-600 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <p className="font-semibold text-slate-800">Strategic Focus</p>
              </Card>
              <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm hover:scale-105 group delay-200">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110" />
                <p className="font-semibold text-slate-800">Proven Results</p>
              </Card>
            </div>
          </div>

          <div className="relative animate-fade-in-left delay-300">
            <div className="relative z-10 transform transition-transform duration-300 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Business meeting and collaboration"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-blue-500/[0.08] to-purple-500/[0.06] rounded-2xl -z-10 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
}