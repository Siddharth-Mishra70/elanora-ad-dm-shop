interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface CategoriesSectionProps {
  categories: Category[];
  onCategoryClick: (category: string) => void;
}

const CategoriesSection = ({ categories, onCategoryClick }: CategoriesSectionProps) => {
  return (
    <section id="categories" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Our Collections
          </span>
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Explore Categories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
              className={`group relative aspect-[4/5] overflow-hidden luxury-card opacity-0 animate-fade-up stagger-${index + 1}`}
            >
              <img
                src={category.image}
                alt={`${category.name} - AD Stone Jewellery`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <h3 className="luxury-heading text-2xl md:text-3xl text-ivory mb-2 group-hover:gold-gradient-text transition-all duration-300">
                  {category.name}
                </h3>
                <p className="text-ivory/80 text-sm tracking-wide mb-4">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ivory/70 group-hover:text-gold-light transition-colors duration-300">
                  Explore Collection
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
