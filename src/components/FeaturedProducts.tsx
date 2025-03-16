
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { Product } from "@/types";

// Mock data for featured products
export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Fresh Organic Tomatoes",
    description: "Juicy, ripe tomatoes grown without pesticides. Perfect for salads and cooking.",
    price: 60,
    unit: "kg",
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f1",
    farmerName: "Rajesh Farms",
    location: "Bangalore",
    available: true,
    organic: true,
    createdAt: new Date()
  },
  {
    id: "2",
    name: "Alphonso Mangoes",
    description: "Sweet and aromatic Alphonso mangoes, freshly harvested from our orchard.",
    price: 300,
    unit: "dozen",
    category: "fruits",
    image: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f2",
    farmerName: "Sunshine Orchards",
    location: "Ratnagiri",
    available: true,
    organic: true,
    createdAt: new Date()
  },
  {
    id: "3",
    name: "Farm Fresh Spinach",
    description: "Nutrient-rich spinach leaves, perfect for salads and cooking.",
    price: 30,
    unit: "bunch",
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f3",
    farmerName: "Green Valley Farms",
    location: "Pune",
    available: true,
    organic: true,
    createdAt: new Date()
  },
  {
    id: "4",
    name: "Free Range Eggs",
    description: "Eggs from free-range chickens fed on natural grains.",
    price: 80,
    unit: "dozen",
    category: "dairy",
    image: "https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f4",
    farmerName: "Happy Hens Farm",
    location: "Coimbatore",
    available: true,
    organic: false,
    createdAt: new Date()
  },
  {
    id: "5",
    name: "Organic Honey",
    description: "Raw, unfiltered honey collected from our bee farms.",
    price: 250,
    unit: "500g",
    category: "other",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f5",
    farmerName: "Bee Natural",
    location: "Kodaikanal",
    available: true,
    organic: true,
    createdAt: new Date()
  },
  {
    id: "6",
    name: "Fresh Carrots",
    description: "Crunchy, sweet carrots freshly harvested from our fields.",
    price: 40,
    unit: "kg",
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f1",
    farmerName: "Rajesh Farms",
    location: "Bangalore",
    available: true,
    organic: false,
    createdAt: new Date()
  },
  {
    id: "7",
    name: "Organic Potatoes",
    description: "Versatile potatoes grown using organic farming practices.",
    price: 50,
    unit: "kg",
    category: "vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f3",
    farmerName: "Green Valley Farms",
    location: "Pune",
    available: true,
    organic: true,
    createdAt: new Date()
  },
  {
    id: "8",
    name: "Fresh Cow Milk",
    description: "Pure cow milk from grass-fed cows. Pasteurized for safety.",
    price: 60,
    unit: "liter",
    category: "dairy",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&q=80&w=600&h=400&fit=crop",
    farmerId: "f4",
    farmerName: "Happy Hens Farm",
    location: "Coimbatore",
    available: true,
    organic: false,
    createdAt: new Date()
  }
];

const FeaturedProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [activeTab, setActiveTab] = useState<string>("all");

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredProducts(mockProducts);
    } else {
      setFilteredProducts(
        mockProducts.filter((product) => product.category === activeTab)
      );
    }
  }, [activeTab]);

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Featured Products</h2>
          <p className="mt-2 text-stone-600">
            Discover the finest products from local farmers
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto mb-10">
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All</TabsTrigger>
            <TabsTrigger value="vegetables" onClick={() => setActiveTab("vegetables")}>Vegetables</TabsTrigger>
            <TabsTrigger value="fruits" onClick={() => setActiveTab("fruits")}>Fruits</TabsTrigger>
            <TabsTrigger value="dairy" onClick={() => setActiveTab("dairy")}>Dairy</TabsTrigger>
            <TabsTrigger value="other" onClick={() => setActiveTab("other")}>Other</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products">
            <Button variant="outline" size="lg">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
