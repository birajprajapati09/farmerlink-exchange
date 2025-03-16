
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User as UserIcon,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-green-600 text-xl">FarmerLink</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <div className="relative w-64">
              <Input 
                type="text" 
                placeholder="Search products" 
                className="pr-8"
              />
              <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
            <Link to="/products" className="text-stone-700 hover:text-green-600 transition-colors">
              Products
            </Link>
            <Link to="/farmers" className="text-stone-700 hover:text-green-600 transition-colors">
              Farmers
            </Link>
            <Link to="/about" className="text-stone-700 hover:text-green-600 transition-colors">
              About
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-stone-700 hover:text-green-600">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button variant="default" className="bg-green-600 hover:bg-green-700">
                Sign In
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-stone-700" />
            ) : (
              <Menu className="h-6 w-6 text-stone-700" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <div className="flex flex-col gap-2">
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="Search products" 
                  className="pr-8"
                />
                <Search className="absolute right-2 top-2.5 h-4 w-4 text-muted-foreground" />
              </div>
              <Link
                to="/products"
                className="px-3 py-2 text-stone-700 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/farmers"
                className="px-3 py-2 text-stone-700 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Farmers
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-stone-700 hover:bg-muted rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/cart"
                className="px-3 py-2 text-stone-700 hover:bg-muted rounded-md flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                Cart
              </Link>
              <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" className="w-full bg-green-600 hover:bg-green-700">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
