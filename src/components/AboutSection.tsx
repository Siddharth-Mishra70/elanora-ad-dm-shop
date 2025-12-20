const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block text-xs tracking-[0.3em] uppercase text-primary mb-4 opacity-0 animate-fade-up">
            Our Story
          </span>
          
          <h2 className="luxury-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8 opacity-0 animate-fade-up stagger-1">
            Crafted with Passion
          </h2>

          {/* Brand Story */}
          <div className="space-y-6 opacity-0 animate-fade-up stagger-2">
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              At <span className="text-primary font-medium">ELANORA</span>, we believe that every woman deserves to wear jewellery that tells her story. Our collection of AD stone jewellery is designed for the modern woman who appreciates timeless elegance with a contemporary touch.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Each piece in our collection is meticulously handcrafted by skilled artisans, using only the finest American Diamond stones. From delicate everyday rings to statement earrings, our designs seamlessly blend traditional craftsmanship with modern aesthetics.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Handcrafted", description: "Each piece is carefully crafted by skilled artisans" },
              { title: "Premium Quality", description: "Only the finest AD stones are selected for our jewellery" },
              { title: "Timeless Design", description: "Designs that transcend trends and seasons" },
            ].map((value, index) => (
              <div 
                key={value.title}
                className={`p-6 luxury-card opacity-0 animate-fade-up`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <h3 className="font-serif text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
