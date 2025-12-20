import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

// Import images
import heroImage from "@/assets/hero-jewelry.jpg";
import categoryRings from "@/assets/category-rings.jpg";
import categoryEarrings from "@/assets/category-earrings.jpg";
import productRing1 from "@/assets/product-ring-1.jpg";
import productRing2 from "@/assets/product-ring-2.jpg";
import productRing3 from "@/assets/product-ring-3.jpg";
import productEarring1 from "@/assets/product-earring-1.jpg";
import productEarring2 from "@/assets/product-earring-2.jpg";
import productEarring3 from "@/assets/product-earring-3.jpg";

interface Product {
  id: string;
  code: string;
  name: string;
  stoneType: string;
  category: string;
  image: string;
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
    code: "EL-R-001",
    name: "Celestial Solitaire",
    stoneType: "Brilliant Cut",
    category: "Rings",
    image: productRing1,
  },
  {
    id: "2",
    code: "EL-R-002",
    name: "Flora Cluster",
    stoneType: "Rose Cut",
    category: "Rings",
    image: productRing2,
  },
  {
    id: "3",
    code: "EL-R-003",
    name: "Eternity Band",
    stoneType: "Princess Cut",
    category: "Rings",
    image: productRing3,
  },
  {
    id: "4",
    code: "EL-E-001",
    name: "Cascade Drops",
    stoneType: "Teardrop",
    category: "Earrings",
    image: productEarring1,
  },
  {
    id: "5",
    code: "EL-E-002",
    name: "Classic Studs",
    stoneType: "Round Brilliant",
    category: "Earrings",
    image: productEarring2,
  },
  {
    id: "6",
    code: "EL-E-003",
    name: "Royal Chandelier",
    stoneType: "Multi-Cut",
    category: "Earrings",
    image: productEarring3,
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
