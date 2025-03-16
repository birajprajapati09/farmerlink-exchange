
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/types";
import { 
  ArrowLeft, 
  ChevronDown, 
  ChevronUp, 
  ShoppingCart, 
  Star, 
  Truck, 
  MessageCircle,
  MapPin
} from "lucide-react";

// Mock products from FeaturedProducts
import { mockProducts } from "../components/FeaturedProducts";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by ID
  const product = mockProducts.find(p => p.id === id);
  
  // If product not found, show error
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-stone-900 mb-4">Product Not Found</h1>
            <p className="text-stone-600 mb-6">The product you're looking for doesn't exist.</p>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Increase quantity
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  
  // Decrease quantity
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Similar products (exclude current product)
  const similarProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-stone-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link 
              to="/products" 
              className="inline-flex items-center text-sm text-stone-600 hover:text-green-600"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Products
            </Link>
          </div>

          {/* Product details */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product images */}
              <div className="p-6">
                <div className="aspect-square rounded-md overflow-hidden bg-stone-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Product info */}
              <div className="p-6 flex flex-col">
                <div className="mb-4">
                  {product.organic && (
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mb-2">
                      Organic
                    </span>
                  )}
                  <h1 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-green-600 mr-2">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-stone-500">per {product.unit}</span>
                  </div>
                  <p className="text-stone-600 mb-6">
                    {product.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center text-sm text-stone-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>From {product.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-stone-600">
                    <Truck className="h-4 w-4 mr-1" />
                    <span>Delivery available</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Quantity</span>
                  </div>
                  <div className="flex items-center border rounded-md w-32">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-3 py-2 text-stone-600 hover:text-green-600"
                      disabled={quantity <= 1}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <span className="flex-1 text-center">{quantity}</span>
                    <button 
                      onClick={increaseQuantity}
                      className="px-3 py-2 text-stone-600 hover:text-green-600"
                    >
                      <ChevronUp className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-auto space-y-4">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Chat with Farmer
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="mt-8">
            <Tabs defaultValue="details">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="farmer">Farmer</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="bg-white p-6 rounded-b-lg border border-t-0 border-stone-200">
                <h3 className="text-lg font-medium mb-4">Product Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Origin</h4>
                    <p className="text-stone-600 mb-4">{product.location}</p>
                    
                    <h4 className="font-medium mb-2">Category</h4>
                    <p className="text-stone-600 mb-4">{product.category}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Harvest Date</h4>
                    <p className="text-stone-600 mb-4">Fresh harvest</p>
                    
                    <h4 className="font-medium mb-2">Storage</h4>
                    <p className="text-stone-600">Store in a cool, dry place</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="farmer" className="bg-white p-6 rounded-b-lg border border-t-0 border-stone-200">
                <h3 className="text-lg font-medium mb-4">About the Farmer</h3>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-stone-200 flex items-center justify-center">
                      <span className="text-2xl font-bold text-stone-600">
                        {product.farmerName.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-medium mb-2">{product.farmerName}</h4>
                    <p className="text-stone-600 mb-4">
                      Small-scale farmer from {product.location} specializing in {product.category}.
                    </p>
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contact Farmer
                    </Button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="bg-white p-6 rounded-b-lg border border-t-0 border-stone-200">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <Button variant="outline" size="sm">Write a Review</Button>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 border border-stone-200 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Priya S.</h4>
                        <div className="flex items-center text-amber-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-stone-500">2 days ago</span>
                    </div>
                    <p className="text-stone-600 mt-2">
                      The produce was extremely fresh and tasted amazing. Will definitely order again!
                    </p>
                  </div>
                  
                  <div className="p-4 border border-stone-200 rounded-md">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium">Rahul M.</h4>
                        <div className="flex items-center text-amber-400 mt-1">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-current" />
                          ))}
                          <Star className="h-4 w-4 text-stone-300" />
                        </div>
                      </div>
                      <span className="text-xs text-stone-500">1 week ago</span>
                    </div>
                    <p className="text-stone-600 mt-2">
                      Good quality product, delivery was on time. Would recommend.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Similar products */}
          {similarProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Similar Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {similarProducts.map((product) => (
                  <Link to={`/product/${product.id}`} key={product.id}>
                    <div className="bg-white border border-stone-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-48 w-full overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-stone-900 mb-1 line-clamp-1">{product.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-green-600">₹{product.price}/{product.unit}</span>
                          <span className="text-xs text-stone-500">{product.farmerName}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
