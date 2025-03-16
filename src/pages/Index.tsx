
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Farm, Leaf, Box, TruckFast } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      
      {/* Why Choose Us Section - Redesigned */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900">
              Why Choose <span className="text-green-600">FarmerLink</span>
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-4"></div>
            <p className="mt-2 text-lg text-stone-600 max-w-2xl mx-auto">
              We're revolutionizing how you connect with local farmers and access fresh, sustainable produce
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Leaf className="w-8 h-8 text-green-600" />}
              title="Farm Fresh Produce"
              description="Get fresh produce directly from farms, with no middlemen and minimal handling time."
            />
            <FeatureCard 
              icon={<Farm className="w-8 h-8 text-green-600" />}
              title="Support Local Farmers"
              description="Help local farmers earn fair prices for their produce and sustain their livelihoods."
            />
            <FeatureCard 
              icon={<Box className="w-8 h-8 text-green-600" />}
              title="Organic & Sustainable"
              description="Choose from a wide range of organic and sustainably grown products."
            />
            <FeatureCard 
              icon={<TruckFast className="w-8 h-8 text-green-600" />}
              title="Fast Delivery"
              description="Fresh produce delivered straight to your doorstep within 24 hours of harvest."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section - Redesigned */}
      <section className="py-20 bg-stone-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&q=80&w=1400&h=800&fit=crop')] opacity-5 bg-fixed"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900">How It Works</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-4"></div>
            <p className="mt-2 text-lg text-stone-600 max-w-2xl mx-auto">
              Four simple steps to get farm-fresh food to your doorstep
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10 border-4 border-white">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-green-600 transition-colors">Browse Products</h3>
                <p className="text-stone-600">
                  Explore a variety of fresh products directly from local farmers near you
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-stone-200 -translate-y-1/2 -z-10"></div>
            </div>
            
            {/* Step 2 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10 border-4 border-white">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-green-600 transition-colors">Place Order</h3>
                <p className="text-stone-600">
                  Select the products you want and place your order with just a few clicks
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-stone-200 -translate-y-1/2 -z-10"></div>
            </div>
            
            {/* Step 3 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10 border-4 border-white">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-green-600 transition-colors">Farmer Prepares</h3>
                <p className="text-stone-600">
                  Farmers harvest and prepare your order fresh, ensuring quality and freshness
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-stone-200 -translate-y-1/2 -z-10"></div>
            </div>
            
            {/* Step 4 */}
            <div className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center z-10 border-4 border-white">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-green-600 transition-colors">Doorstep Delivery</h3>
                <p className="text-stone-600">
                  Receive fresh products at your doorstep within 24 hours of harvest
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/products">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-6 h-auto">
                Start Shopping Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section - New */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-4"></div>
            <p className="mt-2 text-lg text-stone-600 max-w-2xl mx-auto">
              Here's what people love about FarmerLink
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-amber-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className="text-stone-700 mb-6 italic">
                "I've been using FarmerLink for six months now, and the quality of produce is exceptional. Knowing that I'm supporting local farmers makes it even better."
              </p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&q=80&w=100&h=100&fit=crop" alt="Customer" />
                <div>
                  <h4 className="font-medium text-stone-900">Priya Sharma</h4>
                  <p className="text-stone-600 text-sm">Bangalore</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-amber-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className="text-stone-700 mb-6 italic">
                "The taste difference is incredible. Store-bought produce doesn't compare to the freshness of what I get through FarmerLink. Delivery is always on time!"
              </p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&w=100&h=100&fit=crop" alt="Customer" />
                <div>
                  <h4 className="font-medium text-stone-900">Rahul Mehta</h4>
                  <p className="text-stone-600 text-sm">Mumbai</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-amber-500">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <p className="text-stone-700 mb-6 italic">
                "As a chef, quality ingredients are everything. FarmerLink lets me connect directly with farmers and get the freshest produce for my restaurant."
              </p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&q=80&w=100&h=100&fit=crop" alt="Customer" />
                <div>
                  <h4 className="font-medium text-stone-900">Anjali Patel</h4>
                  <p className="text-stone-600 text-sm">Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section - New */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-8 text-green-50">
              Sign up for our newsletter to receive updates on new farmers, seasonal produce, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Button className="bg-green-800 hover:bg-green-900 text-white py-3 px-6 rounded-lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
