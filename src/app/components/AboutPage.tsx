import { Heart, Award, Leaf, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import logoImage from "../logo.png";

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <img 
          src={logoImage} 
          alt="Sweet Escape Logo" 
          className="mx-auto mb-6 h-32 w-32 rounded-full object-cover shadow-lg"
        />
        <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
          About Sweet Escape
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          Welcome to Sweet Escape, where we craft the finest waffle chips right here in Mombasa, Kenya. 
          Our mission is to bring you a delightful snacking experience that combines quality, taste, and innovation.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <Card>
          <CardContent className="p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in the vibrant coastal city of Mombasa, Sweet Escape was born from a simple passion: 
                creating snacks that bring joy to every moment. We noticed that people were looking for healthier, 
                yet delicious alternatives to traditional fried snacks, and that's when we decided to perfect 
                the art of making waffle chips.
              </p>
              <p>
                Our journey began in a small kitchen, experimenting with different recipes and baking techniques 
                until we found the perfect balance of crispiness and flavor. Today, we're proud to offer three 
                distinct flavors that cater to different taste preferences, all baked to perfection and made with 
                natural ingredients.
              </p>
              <p>
                Each bag of Sweet Escape waffle chips represents our commitment to quality and our love for what 
                we do. From sourcing the finest ingredients to perfecting our baking process, we ensure that every 
                bite delivers the sweet escape you deserve.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Our Values</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Made with Love</h3>
              <p className="text-sm text-gray-600">
                Every batch is crafted with care and passion, ensuring the highest quality in every bite.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Natural Ingredients</h3>
              <p className="text-sm text-gray-600">
                We use only natural, quality ingredients without artificial flavors or preservatives.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Premium Quality</h3>
              <p className="text-sm text-gray-600">
                We maintain the highest standards in our production process to deliver excellence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <Sparkles className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="text-sm text-gray-600">
                We continuously explore new flavors and techniques to enhance your snacking experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-16">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="bg-blue-50 p-8 md:p-12">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">Visit Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Location</h3>
                  <p className="text-gray-600">
                    Mombasa, Kenya<br />
                    Coastal Region
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Contact</h3>
                  <p className="text-gray-600">
                    Email: hello@sweetescape.co.ke<br />
                    Phone: +254 712 345 678
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-gray-900">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[75vh] bg-gradient-to-br from-blue-500 to-purple-600 p-8 md:p-12">
              <div className="flex h-full flex-col justify-center text-white">
                <h3 className="mb-4 text-2xl font-bold">Why Mombasa?</h3>
                <p className="text-blue-50">
                  Mombasa's rich cultural heritage and diverse culinary traditions inspire our unique flavor 
                  combinations. The coastal city's vibrant energy is reflected in every batch we create, 
                  bringing together local ingredients and global inspiration.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Commitment Section */}
      <div className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white md:p-12">
        <h2 className="mb-4 text-3xl font-bold">Our Commitment to You</h2>
        <p className="mx-auto max-w-2xl text-lg text-blue-50">
          At Sweet Escape, we're committed to bringing you the best waffle chips experience. 
          From our kitchen in Mombasa to your home, we ensure every step of the process maintains 
          our high standards of quality, taste, and customer satisfaction.
        </p>
      </div>
    </div>
  );
}