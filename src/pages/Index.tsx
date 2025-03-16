
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Why Choose FarmerLink</h2>
            <p className="mt-2 text-stone-600">
              We're changing how you get your food
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M2.29 14.22a1.49 1.49 0 0 0 0 2.12l5.37 5.37a1.49 1.49 0 0 0 2.12 0l5.37-5.37a1.49 1.49 0 0 0 0-2.12l-5.37-5.37a1.49 1.49 0 0 0-2.12 0Z"></path>
                  <path d="M16.02 5.65a1.49 1.49 0 0 0 0 2.12l5.37 5.37a1.49 1.49 0 0 0 2.12 0l-7.49-7.49Z"></path>
                  <path d="m7.6 11.55 3.92 3.92"></path>
                  <path d="m7.6 11.55 3.92 3.92"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">Farm Fresh Produce</h3>
              <p className="text-stone-600">
                Get fresh produce directly from farms, with no middlemen and minimal handling time.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                  <path d="M12 11V3"></path>
                  <path d="M17 8 7 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">Support Local Farmers</h3>
              <p className="text-stone-600">
                Help local farmers earn fair prices for their produce and sustain their livelihoods.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-green-50">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">Organic & Sustainable</h3>
              <p className="text-stone-600">
                Choose from a wide range of organic and sustainably grown products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">How It Works</h2>
            <p className="mt-2 text-stone-600">
              Simple steps to get farm-fresh food to your doorstep
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-xl font-bold text-green-600">1</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 -z-10"></div>
              </div>
              <h3 className="text-lg font-medium text-stone-900 mb-2">Browse Products</h3>
              <p className="text-stone-600 text-sm">
                Explore fresh products from local farmers
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-xl font-bold text-green-600">2</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 -z-10"></div>
              </div>
              <h3 className="text-lg font-medium text-stone-900 mb-2">Place Order</h3>
              <p className="text-stone-600 text-sm">
                Select products and place your order
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-green-200 -z-10"></div>
              </div>
              <h3 className="text-lg font-medium text-stone-900 mb-2">Farmer Prepares</h3>
              <p className="text-stone-600 text-sm">
                Farmers harvest and prepare your order
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-lg font-medium text-stone-900 mb-2">Doorstep Delivery</h3>
              <p className="text-stone-600 text-sm">
                Receive fresh products at your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
