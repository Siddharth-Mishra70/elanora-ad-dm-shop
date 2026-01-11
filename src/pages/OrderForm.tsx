import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Sparkles, Heart } from "lucide-react";

const OrderForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    productName: "",
    productCategory: "",
    quantity: "1",
    deliveryAddress: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "",
    specialInstructions: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Order submitted:", formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center animate-fade-up">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-luxury border border-rose-gold/20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-rose-gold to-blush flex items-center justify-center">
              <Heart className="w-10 h-10 text-white fill-white" />
            </div>
            <h2 className="font-serif text-3xl text-warm-brown mb-4">
              Thank you for your order 💗
            </h2>
            <p className="text-warm-brown/70 mb-8 leading-relaxed">
              Our team will contact you shortly to confirm your purchase. We appreciate your trust in ELANORA.
            </p>
            <Button
              onClick={() => navigate("/")}
              className="gold-button rounded-full px-8 py-6 text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Collection
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="py-6 px-4 border-b border-rose-gold/10 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-warm-brown/70 hover:text-rose-gold transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Back</span>
          </button>
          <div className="text-center">
            <h1 className="font-serif text-2xl rose-gold-gradient-text tracking-widest">
              ELANORA
            </h1>
            <p className="text-xs text-warm-brown/60 italic">Her Wish</p>
          </div>
          <div className="w-20" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-10 animate-fade-up">
          <Sparkles className="w-8 h-8 text-rose-gold mx-auto mb-4" />
          <h2 className="font-serif text-4xl text-warm-brown mb-3">
            Place Your Order
          </h2>
          <p className="text-warm-brown/60 max-w-md mx-auto">
            Complete the form below to order your exquisite piece. We'll reach out to confirm your selection.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 shadow-luxury border border-rose-gold/20 animate-fade-up stagger-1"
        >
          <div className="space-y-6">
            {/* Personal Details Section */}
            <div className="space-y-5">
              <h3 className="font-serif text-xl text-warm-brown border-b border-rose-gold/20 pb-2">
                Personal Details
              </h3>

              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-warm-brown/80">
                  Full Name <span className="text-rose-gold">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobileNumber" className="text-warm-brown/80">
                  Mobile Number (WhatsApp preferred) <span className="text-rose-gold">*</span>
                </Label>
                <Input
                  id="mobileNumber"
                  name="mobileNumber"
                  type="tel"
                  value={formData.mobileNumber}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 98765 43210"
                  className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-warm-brown/80">
                  Email Address <span className="text-rose-gold">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6"
                />
              </div>
            </div>

            {/* Product Details Section */}
            <div className="space-y-5 pt-4">
              <h3 className="font-serif text-xl text-warm-brown border-b border-rose-gold/20 pb-2">
                Product Details
              </h3>

              <div className="space-y-2">
                <Label htmlFor="productName" className="text-warm-brown/80">
                  Product Name / Product Code <span className="text-rose-gold">*</span>
                </Label>
                <Input
                  id="productName"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., Rose Heart Studs or EL-E-007"
                  className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="productCategory" className="text-warm-brown/80">
                    Product Category <span className="text-rose-gold">*</span>
                  </Label>
                  <Select
                    value={formData.productCategory}
                    onValueChange={(value) => handleSelectChange("productCategory", value)}
                    required
                  >
                    <SelectTrigger className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-rose-gold/20">
                      <SelectItem value="ring">Ring</SelectItem>
                      <SelectItem value="earrings">Earrings</SelectItem>
                      <SelectItem value="necklace">Necklace</SelectItem>
                      <SelectItem value="bracelet">Bracelet</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-warm-brown/80">
                    Quantity <span className="text-rose-gold">*</span>
                  </Label>
                  <Select
                    value={formData.quantity}
                    onValueChange={(value) => handleSelectChange("quantity", value)}
                  >
                    <SelectTrigger className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6">
                      <SelectValue placeholder="Select quantity" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-rose-gold/20">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Delivery Details Section */}
            <div className="space-y-5 pt-4">
              <h3 className="font-serif text-xl text-warm-brown border-b border-rose-gold/20 pb-2">
                Delivery Details
              </h3>

              <div className="space-y-2">
                <Label htmlFor="deliveryAddress" className="text-warm-brown/80">
                  Delivery Address <span className="text-rose-gold">*</span>
                </Label>
                <Textarea
                  id="deliveryAddress"
                  name="deliveryAddress"
                  value={formData.deliveryAddress}
                  onChange={handleInputChange}
                  required
                  placeholder="House/Flat No., Street, Landmark"
                  className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-warm-brown/80">
                    City <span className="text-rose-gold">*</span>
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    placeholder="City"
                    className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-warm-brown/80">
                    State <span className="text-rose-gold">*</span>
                  </Label>
                  <Input
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    placeholder="State"
                    className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-warm-brown/80">
                    Pincode <span className="text-rose-gold">*</span>
                  </Label>
                  <Input
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    placeholder="000000"
                    className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6"
                  />
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className="space-y-5 pt-4">
              <h3 className="font-serif text-xl text-warm-brown border-b border-rose-gold/20 pb-2">
                Payment & Instructions
              </h3>

              <div className="space-y-2">
                <Label htmlFor="paymentMethod" className="text-warm-brown/80">
                  Preferred Payment Method <span className="text-rose-gold">*</span>
                </Label>
                <Select
                  value={formData.paymentMethod}
                  onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                  required
                >
                  <SelectTrigger className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl py-6">
                    <SelectValue placeholder="Select payment method" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-rose-gold/20">
                    <SelectItem value="upi">UPI</SelectItem>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="bank">Bank Transfer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialInstructions" className="text-warm-brown/80">
                  Any Special Instructions <span className="text-warm-brown/40">(optional)</span>
                </Label>
                <Textarea
                  id="specialInstructions"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="Gift wrapping, custom engraving, preferred delivery time..."
                  className="bg-ivory/50 border-rose-gold/20 focus:border-rose-gold focus:ring-rose-gold/30 rounded-xl min-h-[100px]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full gold-button rounded-full py-7 text-lg font-medium tracking-wide"
              >
                Place My Order <Sparkles className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-center text-sm text-warm-brown/50 mt-4">
                We respect your privacy. Your details are safe with us.
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-rose-gold/10 bg-white/30">
        <p className="font-serif text-lg rose-gold-gradient-text tracking-widest">
          ELANORA
        </p>
        <p className="text-sm text-warm-brown/50 italic mt-1">Her Wish</p>
      </footer>
    </div>
  );
};

export default OrderForm;
