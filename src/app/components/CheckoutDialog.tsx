import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { CheckCircle2 } from "lucide-react";
import type { Product } from "./ProductCard";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cartItems: CartItem[];
  onOrderComplete: () => void;
}

export function CheckoutDialog({ open, onOpenChange, cartItems, onOrderComplete }: CheckoutDialogProps) {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 200;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      pincode: "",
    });
    onOpenChange(false);
    if (step === "success") {
      onOrderComplete();
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-auto sm:max-w-2xl">
        {step === "form" ? (
          <>
            <DialogHeader>
              <DialogTitle>Checkout</DialogTitle>
              <DialogDescription>Complete your order by filling in your details below</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Shipping Information</h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 712 345 678"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input
                    id="address"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Street address"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Mombasa"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Postal Code *</Label>
                    <Input
                      id="pincode"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      placeholder="80100"
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold">Order Summary</h3>
                
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        {item.product.name} × {item.quantity}
                      </span>
                      <span className="font-semibold">KSh {item.product.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">KSh {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-semibold">KSh {shipping}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="text-xl font-bold">KSh {total}</span>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Place Order
              </Button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-6 py-8">
            <CheckCircle2 className="h-20 w-20 text-green-500" />
            <DialogHeader className="text-center">
              <DialogTitle className="text-2xl">Order Placed Successfully!</DialogTitle>
              <DialogDescription className="text-base">
                Thank you for your order. We'll send you a confirmation email shortly.
              </DialogDescription>
            </DialogHeader>
            
            <div className="w-full space-y-2 rounded-lg bg-gray-50 p-4">
              <p className="text-sm text-gray-600">Order will be delivered to:</p>
              <p className="font-semibold">{formData.name}</p>
              <p className="text-sm text-gray-700">{formData.address}</p>
              <p className="text-sm text-gray-700">{formData.city}, {formData.pincode}</p>
            </div>

            <Button onClick={handleClose} className="w-full" size="lg">
              Continue Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}