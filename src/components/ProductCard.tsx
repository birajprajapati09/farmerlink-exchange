
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="overflow-hidden h-full card-hover border border-slate-200">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform hover:scale-105"
          />
          {product.organic && (
            <span className="absolute top-2 right-2 bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">
              Organic
            </span>
          )}
        </div>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-lg text-slate-900 line-clamp-1">{product.name}</h3>
            <span className="font-bold text-indigo-600">
              ₹{product.price}
              <span className="text-xs text-slate-500 font-normal">/{product.unit}</span>
            </span>
          </div>
          <p className="text-slate-600 text-sm line-clamp-2 mb-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-slate-500">{product.farmerName}</span>
            <span className="text-xs text-slate-500">{product.location}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
