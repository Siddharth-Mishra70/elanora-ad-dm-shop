import { useState } from "react";
import { X, Copy, Check, Instagram } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Product {
  id: string;
  code: string;
  name: string;
  stoneType: string;
  category: string;
  image?: string;
}

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal = ({ product, isOpen, onClose }: OrderModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(product.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code");
    }
  };

  const handleInstagramDM = () => {
    window.open("https://instagram.com/elanora.jewellery", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-background border-border p-0 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Product Preview */}
        <div className="aspect-square relative overflow-hidden bg-cream">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src = "/placeholder.svg";
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="font-serif text-2xl text-foreground text-center">
              {product.name}
            </DialogTitle>
            <p className="text-sm text-muted-foreground text-center mt-2">
              {product.stoneType} AD Stone {product.category}
            </p>
          </DialogHeader>

          {/* Product Code Display */}
          <div className="bg-cream rounded-lg p-6 mb-6 text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
              Your Product Code
            </span>
            <span className="font-serif text-3xl md:text-4xl gold-gradient-text font-medium">
              {product.code}
            </span>
          </div>

          {/* Instructions */}
          <p className="text-sm text-muted-foreground text-center mb-6 leading-relaxed">
            Please copy this code and DM us on our official Instagram page to place your order.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleCopyCode}
              className={`flex items-center justify-center gap-2 w-full py-3 rounded transition-all duration-300 ${
                copied 
                  ? "bg-green-500/10 text-green-600 border border-green-500/30" 
                  : "outline-gold-button"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Code Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Code</span>
                </>
              )}
            </button>

            <button
              onClick={handleInstagramDM}
              className="gold-button flex items-center justify-center gap-2 w-full"
            >
              <Instagram className="w-4 h-4" />
              <span>DM on Instagram</span>
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
