interface Product {
  id: string;
  code: string;
  name: string;
  stoneType: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onOrderClick: (product: Product) => void;
  index: number;
}

const ProductCard = ({ product, onOrderClick, index }: ProductCardProps) => {
  return (
    <article 
      className={`group luxury-card overflow-hidden opacity-0 animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-cream">
        <img
          src={product.image}
          alt={`${product.name} - ${product.stoneType} AD Stone ${product.category}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-500" />
        
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
