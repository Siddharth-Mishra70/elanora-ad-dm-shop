import ProductCard from "./ProductCard";

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

interface FeaturedProductsProps {
  products: Product[];
  onOrderClick: (product: Product) => void;
  filterCategory?: string;
}

const FeaturedProducts = ({ products, onOrderClick, filterCategory }: FeaturedProductsProps) => {
  const filteredProducts = filterCategory 
    ? products.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase())
    : products;

  return (
    <section id="featured" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            {filterCategory ? `${filterCategory} Collection` : "Featured Collection"}
          </span>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            {filterCategory ? `Our ${filterCategory}` : "Exquisite Pieces"}
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Each piece is meticulously crafted with premium AD stones, reflecting timeless elegance and modern sophistication.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              onOrderClick={onOrderClick}
              index={index}
            />
          ))}
        </div>

        {/* View All CTA */}
        {filterCategory && (
          <div className="text-center mt-16">
            <button 
              onClick={() => window.location.reload()}
              className="outline-gold-button"
            >
              View All Collections
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;
