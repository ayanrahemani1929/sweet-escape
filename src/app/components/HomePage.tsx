import type { Product } from "./ProductCard";
import { ProductCard } from "./ProductCard";

interface HomePageProps {
  products: Product[];
  getProductQuantity: (productId: string) => number;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
}

export function HomePage({ products, getProductQuantity, onAddToCart, onRemoveFromCart }: HomePageProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          Sweet Escape Waffle Chips
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Indulge in our premium waffle chips - light, crunchy, and baked to perfection. 
          Made with natural ingredients right here in Mombasa for the perfect sweet escape.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={getProductQuantity(product.id)}
            onAddToCart={onAddToCart}
            onRemoveFromCart={onRemoveFromCart}
          />
        ))}
      </div>

      {/* Features Section */}
      <div className="mt-16 rounded-lg bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">Why Choose Sweet Escape?</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🥐</span>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">Light & Crunchy</h3>
            <p className="text-sm text-gray-600">Perfect texture in every bite</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🔥</span>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">Baked Not Fried</h3>
            <p className="text-sm text-gray-600">Healthier snacking option</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🍯</span>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">Lightly Sweetened</h3>
            <p className="text-sm text-gray-600">Just the right sweetness</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="mb-2 font-semibold text-gray-900">Natural Ingredients</h3>
            <p className="text-sm text-gray-600">Quality you can trust</p>
          </div>
        </div>
      </div>
    </div>
  );
}
