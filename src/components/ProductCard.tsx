import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  code: string;
  name: string;
  stoneType: string;
  category: string;
  image?: string;
  images?: string[];
  price: number;
}

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onOrderClick, index }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const FALLBACK_IMAGE = "/placeholder.svg";

  const allImages = (product.images ?? []).filter(Boolean);
  if (allImages.length === 0) allImages.push(product.image || FALLBACK_IMAGE);

  const hasMultipleImages = allImages.length > 1;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <article 
      className={`group premium-card opacity-0 animate-fade-up transition-all duration-500`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-blush to-cream">
        <img
          src={allImages[currentImageIndex]}
          alt={`${product.name} - ${product.stoneType} AD Stone ${product.category}`}
          onError={(e) => {
            e.currentTarget.src = "/placeholder.svg";
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Soft pink glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-rose-gold/10 via-transparent to-transparent pointer-events-none" />
        
        {/* Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
        
        {/* Image Dots */}
        {hasMultipleImages && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {allImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? "bg-rose-gold w-5 shadow-md" 
                    : "bg-background/70 hover:bg-background"
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-4 py-1.5 bg-background/95 backdrop-blur-sm text-xs tracking-[0.15em] uppercase text-muted-foreground rounded-full shadow-sm border border-border/50">
            {product.category}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-serif text-xl md:text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground tracking-wide">
            {product.stoneType} AD Stone
          </p>
          <p className="text-lg font-semibold text-primary mt-2">
            ₹{product.price}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs tracking-[0.1em] text-muted-foreground font-medium">
            {product.code}
          </span>
          
          <button
            onClick={() => onOrderClick(product)}
            className="outline-gold-button text-xs py-2 px-4"
          >
            Order Now
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
