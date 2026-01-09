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
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury AD Stone Jewellery by ELANORA"
          className="w-full h-full object-cover scale-105 opacity-90"
        />
        {/* Pink-tinted gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blush/80 via-background/50 to-background" />
        {/* Soft pink glow effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-rose-gold/10 via-transparent to-dusty-rose/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="opacity-0 animate-fade-up stagger-1">
          <span className="inline-block text-xs md:text-sm tracking-[0.3em] uppercase text-rose-gold mb-4 md:mb-6 font-medium">
            Luxury AD Stone Jewellery
          </span>
        </div>
        
        <h1 className="opacity-0 animate-fade-up stagger-2 luxury-heading hero-title text-5xl md:text-7xl lg:text-8xl font-light mb-6 md:mb-8">
          <span className="rose-gold-gradient-text">ELANORA</span>
        </h1>
        
        <p className="opacity-0 animate-fade-up stagger-3 font-serif text-xl md:text-2xl lg:text-3xl text-warm-brown/80 italic mb-8 md:mb-12 font-light">
          Timeless AD Stone Jewellery for Modern Elegance
        </p>
        
        <div className="opacity-0 animate-fade-up stagger-4">
          <button 
            onClick={scrollToFeatured}
            className="gold-button shadow-lg hover:shadow-xl"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <div className="w-[1px] h-16 bg-gradient-to-b from-rose-gold/0 via-rose-gold to-rose-gold/0" />
      </div>
    </section>
  );
};

export default HeroSection;
