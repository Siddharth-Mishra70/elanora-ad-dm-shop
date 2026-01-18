import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

// Import images
import heroImage from "@/assets/hero-jewelry-showcase.jpg";
import categoryRings from "@/assets/category-rings.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";
import productRing1 from "@/assets/product-ring-1.jpg";
import productRing2 from "@/assets/product-ring-2.jpg";
import productRing3 from "@/assets/product-ring-3.jpg";
import productEarring1 from "@/assets/product-earring-1.jpg";
import productEarring2 from "@/assets/product-earring-2.jpg";
import productEarring3 from "@/assets/product-earring-3.jpg";
import productEarring4 from "@/assets/product-earring-4.jpg";
import productEarring5 from "@/assets/product-earring-5.jpg";
import productEarring6 from "@/assets/product-earring-6.jpg";
import productHeart1 from "@/assets/product-heart-1.jpg";
import productHeart2 from "@/assets/product-heart-2.jpg";
import productHeart3 from "@/assets/product-heart-3.jpg";
import productPetal1 from "@/assets/product-petal-1.jpg";
import productPetal2 from "@/assets/product-petal-2.jpg";
import productPetal3 from "@/assets/product-petal-3.jpg";
import productBracelet1 from "@/assets/product-bracelet-1.jpg";
import productBracelet2 from "@/assets/product-bracelet-2.jpg";
import productBracelet3 from "@/assets/product-bracelet-3.jpg";
import productNecklace1 from "@/assets/product-necklace-1.jpg";
import productNecklace2 from "@/assets/product-necklace-2.jpg";
import productHeartNecklace1 from "@/assets/product-heart-necklace-1.jpg";
import productHeartNecklace2 from "@/assets/product-heart-necklace-2.jpg";
import productDiamondEarring1 from "@/assets/product-diamond-earring-1.jpg";
import productButterfly1 from "@/assets/product-butterfly-1.png";
import productButterfly2 from "@/assets/product-butterfly-2.png";
import productButterfly3 from "@/assets/product-butterfly-3.png";
import productCrownBracelet1 from "@/assets/product-crown-bracelet-1.png";
import productCrownBracelet2 from "@/assets/product-crown-bracelet-2.png";
import productCrownBracelet3 from "@/assets/product-crown-bracelet-3.png";
import productHeartBracelet1 from "@/assets/product-heart-bracelet-1.jpg";
import productHeartBracelet2 from "@/assets/product-heart-bracelet-2.jpg";
import productHeartBracelet3 from "@/assets/product-heart-bracelet-3.jpg";
import productCherryRing1 from "@/assets/product-cherry-ring-1.png";
import productCherryRing2 from "@/assets/product-cherry-ring-2.png";
import productCherryRing3 from "@/assets/product-cherry-ring-3.png";
import productMomRing1 from "@/assets/product-mom-ring-1.png";
import productMomRing2 from "@/assets/product-mom-ring-2.png";
import productMomRing3 from "@/assets/product-mom-ring-3.png";
import productHeartRing1 from "@/assets/product-heart-ring-1.png";
import productHeartRing2 from "@/assets/product-heart-ring-2.png";
import productHeartRing3 from "@/assets/product-heart-ring-3.png";
import productBowRing1 from "@/assets/product-bow-ring-1.jpeg";
import productBowRing2 from "@/assets/product-bow-ring-2.jpeg";
import productBowRing3 from "@/assets/product-bow-ring-3.jpeg";
import productButterflyPendant1 from "@/assets/product-butterfly-pendant-1.jpeg";
import productButterflyPendant2 from "@/assets/product-butterfly-pendant-2.jpeg";
import productButterflyPendant3 from "@/assets/product-butterfly-pendant-3.jpeg";


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

const categories = [
  {
    id: "rings",
    name: "Rings",
    description: "Exquisite AD Stone Rings",
    image: categoryRings,
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Elegant AD Stone Earrings",
    image: categoryEarrings,
  },
];

const products: Product[] = [
  {
    id: "1",
    code: "EL-E-007",
    name: "Rose Heart Studs",
    stoneType: "Heart Cut",
    category: "Earrings",
    image: productHeart1,
    images: [productHeart1, productHeart2, productHeart3],
    price: 499,
  },
  {
    id: "2",
    code: "EL-E-008",
    name: "Pearl Petal Drops",
    stoneType: "Petal Cut",
    category: "Earrings",
    image: productPetal1,
    images: [productPetal1, productPetal2, productPetal3],
    price: 299,
  },
  {
    id: "3",
    code: "EL-R-001",
    name: "Celestial Solitaire",
    stoneType: "Brilliant Cut",
    category: "Rings",
    image: productRing1,
    images: [productRing1, productRing2, productRing3],
    price: 499,
  },
  {
    id: "2",
    code: "EL-B-001",
    name: "Crown Elegance",
    stoneType: "Rose Cut",
    category: "Bracelets",
    image: productCrownBracelet1,
    images: [productCrownBracelet1, productCrownBracelet2, productCrownBracelet3],
    price: 649,
  },
  {
    id: "3",
    code: "EL-P-001",
    name: "Eternity Band",
    stoneType: "Princess Cut",
    category: "Pendant",
    image: productNecklace1,
    images: [productNecklace1, productNecklace2],
    price: 499,
  },
  {
    id: "4",
    code: "EL-E-001",
    name: "Cascade Drops",
    stoneType: "Teardrop",
    category: "Earrings",
    image: productHeartNecklace1,
    images: [productHeartNecklace1, productHeartNecklace2],
    price: 499,
  },
  {
    id: "5",
    code: "EL-E-002",
    name: "Classic Studs",
    stoneType: "Round Brilliant",
    category: "Earrings",
    image: productDiamondEarring1,
    price: 299,
  },
  {
    id: "6",
    code: "EL-E-003",
    name: "Butterfly Elegance",
    stoneType: "Multi-Cut",
    category: "Earrings",
    image: productButterfly1,
    images: [productButterfly1, productButterfly2, productButterfly3],
    price: 799,
  },
  {
    id: "7",
    code: "EL-E-004",
    name: "Halo Cushion Studs",
    stoneType: "Cushion Cut",
    category: "Earrings",
    image: productEarring4,
    images: [productEarring4, productEarring5, productEarring6],
    price: 599,
  },
  {
    id: "8",
    code: "EL-E-005",
    name: "Heart Link Bracelet",
    stoneType: "Heart Cut",
    category: "Bracelets",
    image: productHeartBracelet1,
    images: [productHeartBracelet1, productHeartBracelet2, productHeartBracelet3],
    price: 999,
  },
  {
    id: "9",
    code: "EL-R-002",
    name: "Cherry Blossom Ring",
    stoneType: "Wave Cut",
    category: "Rings",
    image: productCherryRing1,
    images: [productCherryRing1, productCherryRing2, productCherryRing3],
    price: 599,
  },
  {
    id: "10",
    code: "EL-R-003",
    name: "Mom Love Ring",
    stoneType: "Diamond Cut",
    category: "Rings",
    image: productMomRing1,
    images: [productMomRing1, productMomRing2, productMomRing3],
    price: 399,
  },
  {
    id: "11",
    code: "EL-R-004",
    name: "Heart Solitaire Ring",
    stoneType: "Heart Cut",
    category: "Rings",
    image: productHeartRing1,
    images: [productHeartRing1, productHeartRing2, productHeartRing3],
    price: 499,
  },
  {
    id: "12",
    code: "EL-R-005",
    name: "Bow Sparkle Ring",
    stoneType: "Bow Cut",
    category: "Rings",
    image: productBowRing1,
    images: [productBowRing1, productBowRing2, productBowRing3],
    price: 499,
  },
  {
    id: "13",
    code: "EL-N-003",
    name: "Butterfly Flower Pendant",
    stoneType: "Marquise Cut",
    category: "Necklaces",
    image: productButterflyPendant1,
    images: [productButterflyPendant1, productButterflyPendant2, productButterflyPendant3],
    price: 799,
  },
];

const Index = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string | undefined>(undefined);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCategoryClick = (categoryId: string) => {
    setFilterCategory(categoryId);
    // Scroll to featured section
    setTimeout(() => {
      const element = document.getElementById("featured");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection heroImage={heroImage} />
      <CategoriesSection 
        categories={categories} 
        onCategoryClick={handleCategoryClick} 
      />
      <FeaturedProducts 
        products={products} 
        onOrderClick={handleOrderClick}
        filterCategory={filterCategory}
      />
      <AboutSection />
      <Footer />
      <OrderModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

export default Index;
