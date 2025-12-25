import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: string;
  code: string;
  name: string;
  stoneType: string;
  category: string;
  image: string;
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
  
  const allImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];
  
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
      className={`group luxury-card overflow-hidden opacity-0 animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-cream">
        <img
          src={allImages[currentImageIndex]}
          alt={`${product.name} - ${product.stoneType} AD Stone ${product.category}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Navigation Arrows */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </>
        )}
        
        {/* Image Dots */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {allImages.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex 
                    ? "bg-primary w-4" 
                    : "bg-background/60 hover:bg-background/80"
                }`}
              />
            ))}
          </div>
        )}
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500 pointer-events-none" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-xs tracking-[0.15em] uppercase text-muted-foreground">
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
