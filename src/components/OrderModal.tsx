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
      <DialogContent className="sm:max-w-sm bg-background border-border p-0 overflow-hidden max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 p-1.5 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Product Preview - Smaller for mobile */}
        <div className="aspect-[4/3] relative overflow-hidden bg-cream">
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

        <div className="p-4 md:p-6">
          <DialogHeader className="mb-3">
            <DialogTitle className="font-serif text-xl text-foreground text-center">
              {product.name}
            </DialogTitle>
            <p className="text-xs text-muted-foreground text-center mt-1">
              {product.stoneType} {product.category}
            </p>
          </DialogHeader>

          {/* Product Code Display - More compact */}
          <div className="bg-cream rounded-lg p-4 mb-4 text-center">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground block mb-1">
              Your Product Code
            </span>
            <span className="font-serif text-2xl gold-gradient-text font-medium">
              {product.code}
            </span>
          </div>

          {/* Instructions - Shorter */}
          <p className="text-xs text-muted-foreground text-center mb-4">
            Copy this code and DM us on Instagram to order.
          </p>

          {/* Action Buttons - More compact */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleCopyCode}
              className={`flex items-center justify-center gap-2 w-full py-2.5 rounded text-sm transition-all duration-300 ${
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
              className="gold-button flex items-center justify-center gap-2 w-full py-2.5 text-sm"
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
