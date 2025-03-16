
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight">
              Fresh from Farm <br className="hidden md:inline" />
              <span className="text-green-600">to your Table</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-stone-700 max-w-md md:max-w-xl">
              Connect directly with local farmers for fresh, organic produce delivered to your doorstep.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link to="/products">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">Shop Now</Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 mt-8 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&q=80&w=800&h=600&fit=crop"
              alt="Fresh farm produce"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
