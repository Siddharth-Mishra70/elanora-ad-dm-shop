interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  const scrollToFeatured = () => {
    const element = document.getElementById("featured");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury AD Stone Jewellery by ELANORA"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-up stagger-1">
          <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-primary mb-4 md:mb-6">
            Luxury AD Stone Jewellery
          </span>
        </div>
        
        <h1 className="opacity-0 animate-fade-up stagger-2 luxury-heading hero-title text-5xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8">
          <span className="gold-gradient-text">ELANORA</span>
        </h1>
        
        <p className="opacity-0 animate-fade-up stagger-3 font-serif text-xl md:text-2xl lg:text-3xl text-foreground/80 italic mb-8 md:mb-12 font-light">
          Timeless AD Stone Jewellery for Modern Elegance
        </p>
        
        <div className="opacity-0 animate-fade-up stagger-4">
          <button 
            onClick={scrollToFeatured}
            className="gold-button"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
      </div>
    </section>
  );
};

export default HeroSection;
