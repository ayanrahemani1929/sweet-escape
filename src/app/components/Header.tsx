import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import logoImage from "../logo.png";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ cartItemCount, onCartClick, currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 pt-2 pb-2 z-50 w-full border-b bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div 
          className="flex cursor-pointer items-center gap-3"
          onClick={() => onNavigate("home")}
        >
          <img 
            src={logoImage} 
            alt="Sweet Escape Logo" 
            className="h-12 w-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-xl font-bold text-gray-900">Sweet Escape</h1>
            <p className="text-xs text-gray-600">Waffle Chips</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => onNavigate("home")}
            className={`text-sm font-medium cursor-pointer transition-colors hover:text-blue-600 ${
              currentPage === "home" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            Home
          </button>
          <button 
            onClick={() => onNavigate("about")}
            className={`text-sm font-medium cursor-pointer transition-colors hover:text-blue-600 ${
              currentPage === "about" ? "text-blue-600" : "text-gray-600"
            }`}
          >
            About Us
          </button>
        </nav>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="relative cursor-pointer"
          onClick={onCartClick}
        >
          <ShoppingCart className="h-5 w-5" />
          {cartItemCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center"
            >
              {cartItemCount}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  );
}