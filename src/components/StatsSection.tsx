import { Button } from "./ui/button";
import { Play } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="py-20 bg-white fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-8 slide-up">
          <Button 
            variant="outline" 
            className="mb-6 bg-blue-50 px-6 py-2 rounded-full border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            Our Intro Video
          </Button>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Watch Our Promo Video
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl scale-up">
          <img 
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Business professionals in modern office"
            className="w-full h-[500px] object-cover"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10">
            <button className="w-20 h-20 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg bounce-in">
              <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}