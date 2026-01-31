import { useState } from "react";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import type { Product } from "./components/ProductCard";
import { CartSheet } from "./components/CartSheet";
import { CheckoutDialog } from "./components/CheckoutDialog";
import oreoImage from "../assets/Oreo Waffle - SE.png";
import strawberryImage from "../assets/Strawberry Dream - SE.png";
import milkChocoImage from "../assets/Milk Choco - SE.png";
import PayButton from "./components/PayButton";

const products: Product[] = [
  {
    id: "oreo",
    name: "Oreo Waffle Chips",
    description: "Crispy waffle chips with delicious Oreo flavor",
    price: 450,
    weight: "40g",
    image: oreoImage,
    features: ["Light & Crunchy", "Baked Not Fried", "Lightly Sweetened", "Natural Ingredients"],
  },
  {
    id: "strawberry",
    name: "Strawberry Dream Waffle Chips",
    description: "Sweet waffle chips with strawberry delight",
    price: 450,
    weight: "40g",
    image: strawberryImage,
    features: ["Light & Crunchy", "Baked Not Fried", "Lightly Sweetened", "Natural Ingredients"],
  },
  {
    id: "milk-choco",
    name: "Milk Choco Drizzle Waffle Chips",
    description: "Waffle chips drizzled with rich milk chocolate",
    price: 450,
    weight: "40g",
    image: milkChocoImage,
    features: ["Light & Crunchy", "Baked Not Fried", "Lightly Sweetened", "Natural Ingredients"],
  },
];

interface CartItem {
  product: Product;
  quantity: number;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about">("home");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.product.id !== productId);
    });
  };

  const removeAllFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    clearCart();
  };

  const getProductQuantity = (productId: string) => {
    const cartItem = cart.find((item) => item.product.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartItemCount={totalCartItems} 
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page as "home" | "about")}
      />

      <main>
        {currentPage === "home" ? (
          <HomePage
            products={products}
            getProductQuantity={getProductQuantity}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ) : (
          <AboutPage />
        )}
      </main>

      <div>
        <h1>Test M-Pesa Payment</h1>
        <PayButton />
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2026 Sweet Escape. All rights reserved.</p>
          <p className="mt-1">Made with love in Mombasa, Kenya</p>
        </div>
      </footer>

      {/* Cart Sheet */}
      <CartSheet
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        cartItems={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
        onRemoveAllFromCart={removeAllFromCart}
        onCheckout={handleCheckout}
      />

      {/* Checkout Dialog */}
      <CheckoutDialog
        open={isCheckoutOpen}
        onOpenChange={setIsCheckoutOpen}
        cartItems={cart}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}