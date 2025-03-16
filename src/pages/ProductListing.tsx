
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Product } from "@/types";
import { 
  ChevronDown, 
  SliderIcon, 
  Search, 
  X, 
  Filter 
} from "lucide-react";

// Import mock products from FeaturedProducts
import { mockProducts } from "../components/FeaturedProducts";

const ProductListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");

  // Categories
  const categories = [
    { id: "vegetables", name: "Vegetables" },
    { id: "fruits", name: "Fruits" },
    { id: "dairy", name: "Dairy & Eggs" },
    { id: "grains", name: "Grains & Cereals" },
    { id: "other", name: "Other Products" },
  ];

  // Sort options
  const sortOptions = [
    { value: "recommended", label: "Recommended" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "newest", label: "Newest First" },
  ];

  // Filter products based on search, price range, and categories
  const filteredProducts = mockProducts.filter((product) => {
    const matchesSearch = 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPrice = 
      product.price >= priceRange[0] && product.price <= priceRange[1];
    
    const matchesCategory = 
      selectedCategories.length === 0 || selectedCategories.includes(product.category);
    
    return matchesSearch && matchesPrice && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    return 0; // recommended
  });

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter(id => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setPriceRange([0, 500]);
    setSelectedCategories([]);
    setSortBy("recommended");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 bg-stone-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-stone-900">All Products</h1>
            <p className="text-stone-600 mt-2">Browse our selection of fresh farm products</p>
          </div>

          {/* Search and filter controls for mobile */}
          <div className="md:hidden mb-6 space-y-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-8"
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between"
              onClick={() => setShowFilters(!showFilters)}
            >
              <span className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            
            {showFilters && (
              <div className="bg-white p-4 rounded-md shadow-sm border border-stone-200 space-y-6">
                {/* Mobile filters */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Categories</h3>
                  </div>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`mobile-${category.id}`} 
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                        />
                        <Label htmlFor={`mobile-${category.id}`}>{category.name}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Price Range</h3>
                    <span className="text-sm text-stone-600">
                      ₹{priceRange[0]} - ₹{priceRange[1]}
                    </span>
                  </div>
                  <Slider
                    defaultValue={priceRange}
                    min={0}
                    max={500}
                    step={10}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                    className="mb-2"
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={clearFilters}
                  className="text-stone-600 w-full"
                >
                  <X className="mr-2 h-4 w-4" />
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar filters - desktop */}
            <div className="hidden md:block w-64 space-y-8">
              <div className="bg-white p-6 rounded-md shadow-sm border border-stone-200">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category.id} className="flex items-center space-x-2">
                          <Checkbox 
                            id={category.id} 
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                          />
                          <Label htmlFor={category.id}>{category.name}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-medium">Price Range</h3>
                      <span className="text-sm text-stone-600">
                        ₹{priceRange[0]} - ₹{priceRange[1]}
                      </span>
                    </div>
                    <Slider
                      defaultValue={priceRange}
                      min={0}
                      max={500}
                      step={10}
                      onValueChange={(value) => setPriceRange(value as [number, number])}
                      className="mb-2"
                    />
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={clearFilters}
                    className="text-stone-600 w-full"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Product grid */}
            <div className="flex-1">
              {/* Sort and search - desktop */}
              <div className="hidden md:flex justify-between items-center mb-6">
                <div className="relative w-64">
                  <Input
                    type="text"
                    placeholder="Search products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-8"
                  />
                  <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Label htmlFor="sort-by" className="text-sm">Sort by:</Label>
                  <select
                    id="sort-by"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm border rounded-md px-2 py-1"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Results count */}
              <div className="mb-6">
                <p className="text-stone-600 text-sm">
                  Showing {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'}
                </p>
              </div>

              {/* Product grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-white rounded-md border border-stone-200">
                  <h3 className="text-xl font-medium text-stone-900 mb-2">No products found</h3>
                  <p className="text-stone-600 mb-4">Try adjusting your search or filter settings</p>
                  <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductListing;
