import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Plus, Minus } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  image: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
}

export function ProductCard({ product, quantity, onAddToCart, onRemoveFromCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
      <CardContent className="pt-5">
        <div className="aspect-square w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain pb-5"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
          <p className="mt-2 text-sm text-gray-600">{product.description}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {product.features.map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
          
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">KSh {product.price}</span>
            <span className="text-sm text-gray-500">{product.weight}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        {quantity === 0 ? (
          <Button 
            className="w-full cursor-pointers" 
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        ) : (
          <div className="flex w-full items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onRemoveFromCart(product.id)}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="flex-1 text-center font-semibold">{quantity} in cart</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => onAddToCart(product)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}