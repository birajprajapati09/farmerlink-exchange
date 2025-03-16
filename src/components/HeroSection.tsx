
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white pt-16 pb-24 md:py-28 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-300 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 relative">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">Farm to Table Marketplace</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-stone-900 mb-4">
              Fresh from Farm <br className="hidden md:inline" />
              <span className="text-gradient bg-gradient-to-r from-green-600 to-indigo-600">to your Table</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-stone-700 max-w-md md:max-w-xl mb-8">
              Connect directly with local farmers for fresh, organic produce delivered to your doorstep. Support local agriculture and enjoy farm-fresh quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 h-auto text-lg flex items-center gap-2">
                  Shop Now
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 px-8 py-6 h-auto text-lg">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-green-200 to-indigo-100 rounded-2xl transform rotate-3 scale-95 opacity-30 blur-xl"></div>
            <img
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&q=80&w=800&h=600&fit=crop"
              alt="Fresh farm produce"
              className="rounded-2xl shadow-xl w-full object-cover relative z-10 transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-stone-900">100% Guaranteed</p>
                  <p className="text-xs text-stone-600">Fresh & Organic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
