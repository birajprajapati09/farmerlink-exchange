
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-stone-100 border-t border-stone-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <span className="font-bold text-green-600 text-xl">FarmerLink</span>
            </Link>
            <p className="mt-3 text-stone-600 text-sm">
              Connecting farmers and consumers for a sustainable food system.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-stone-500 hover:text-green-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-500 hover:text-green-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-stone-500 hover:text-green-600">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-stone-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-stone-600 hover:text-green-600 text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="text-stone-600 hover:text-green-600 text-sm">
                  Farmers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-600 hover:text-green-600 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-600 hover:text-green-600 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-stone-900 mb-4">For Farmers</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/auth" className="text-stone-600 hover:text-green-600 text-sm">
                  Join as Farmer
                </Link>
              </li>
              <li>
                <Link to="/farmer-guide" className="text-stone-600 hover:text-green-600 text-sm">
                  Seller Guide
                </Link>
              </li>
              <li>
                <a href="#" className="text-stone-600 hover:text-green-600 text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-600 hover:text-green-600 text-sm">
                  Resources
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-stone-900 mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-stone-600 hover:text-green-600 text-sm">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-600 hover:text-green-600 text-sm">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-600 hover:text-green-600 text-sm">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-stone-600 hover:text-green-600 text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-stone-200 text-center text-sm text-stone-500">
          <p>© {new Date().getFullYear()} FarmerLink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
