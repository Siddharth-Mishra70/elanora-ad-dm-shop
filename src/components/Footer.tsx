import { Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blush-dark to-blush py-16 md:py-20 border-t border-rose-gold/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          {/* Brand Logo */}
          <h2 className="luxury-heading text-3xl md:text-4xl font-light rose-gold-gradient-text mb-4">
            ELANORA
          </h2>
          
          {/* Tagline */}
          <p className="font-serif text-lg text-warm-brown/70 italic mb-8 max-w-md">
            Luxury AD Stone Jewellery Crafted for Grace
          </p>

          {/* Divider */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-rose-gold to-transparent mb-8" />

          {/* Instagram Link */}
          <a
            href="https://instagram.com/elanora.jewellery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-muted-rose hover:text-rose-gold transition-colors duration-300 mb-12"
            aria-label="Follow ELANORA on Instagram"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm tracking-[0.1em]">@elanora.jewellery</span>
          </a>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground tracking-wider">
            © {currentYear} ELANORA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
