import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection("hero")}
            className="luxury-heading text-2xl md:text-3xl font-semibold gold-gradient-text"
          >
            ELANORA
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection("categories")}
              className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Collections
            </button>
            <button 
              onClick={() => scrollToSection("featured")}
              className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Featured
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              About
            </button>
            <Link 
              to="/order"
              className="text-sm tracking-[0.1em] uppercase bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Order Now
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/elanora.world?igsh=MWRqdHgzOXBkdGlqMA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline text-sm tracking-wider">@elanora.world</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border/30 py-6 animate-fade-in">
            <div className="flex flex-col items-center gap-6">
              <button 
                onClick={() => scrollToSection("categories")}
                className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Collections
              </button>
              <button 
                onClick={() => scrollToSection("featured")}
                className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Featured
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-sm tracking-[0.1em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                About
              </button>
              <Link 
                to="/order"
                className="text-sm tracking-[0.1em] uppercase bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Order Now
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
