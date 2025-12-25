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
import productEarring4 from "@/assets/product-earring-4.jpg";
import productEarring5 from "@/assets/product-earring-5.jpg";
import productEarring6 from "@/assets/product-earring-6.jpg";
import productHeart1 from "@/assets/product-heart-1.jpg";
import productHeart2 from "@/assets/product-heart-2.jpg";
import productHeart3 from "@/assets/product-heart-3.jpg";

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
    price: 599,
  },
  {
    id: "2",
    code: "EL-R-001",
    name: "Celestial Solitaire",
    stoneType: "Brilliant Cut",
    category: "Rings",
    image: productRing1,
    price: 599,
  },
  {
    id: "2",
    code: "EL-R-002",
    name: "Flora Cluster",
    stoneType: "Rose Cut",
    category: "Rings",
    image: productRing2,
    price: 649,
  },
  {
    id: "3",
    code: "EL-R-003",
    name: "Eternity Band",
    stoneType: "Princess Cut",
    category: "Rings",
    image: productRing3,
    price: 549,
  },
  {
    id: "4",
    code: "EL-E-001",
    name: "Cascade Drops",
    stoneType: "Teardrop",
    category: "Earrings",
    image: productEarring1,
    price: 699,
  },
  {
    id: "5",
    code: "EL-E-002",
    name: "Classic Studs",
    stoneType: "Round Brilliant",
    category: "Earrings",
    image: productEarring2,
    price: 449,
  },
  {
    id: "6",
    code: "EL-E-003",
    name: "Royal Chandelier",
    stoneType: "Multi-Cut",
    category: "Earrings",
    image: productEarring3,
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
    price: 499,
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
