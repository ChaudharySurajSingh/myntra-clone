import { useEffect, useMemo, useState } from "react";
import AuthModal from "./components/AuthModal.jsx";
import BagDrawer from "./components/BagDrawer.jsx";
import CategorySection from "./components/CategorySection.jsx";
import DealsSection from "./components/DealsSection.jsx";
import FilterSidebar from "./components/FilterSidebar.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ProductGrid from "./components/ProductGrid.jsx";
import { brandDeals, couponBanner, heroSlides, navigationItems, products, shoppingCategories, sortOptions } from "./data/catalog.js";
import { getBagProducts, getDiscount } from "./utils/shop.js";

function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("recommended");
  const [wishlist, setWishlist] = useState([]);
  const [bag, setBag] = useState([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);

  const categoryFilters = useMemo(() => ["All", ...navigationItems], []);

  const filteredProducts = useMemo(() => {
    const cleanSearchText = searchText.trim().toLowerCase();
    const visibleProducts = products.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.department === activeCategory;
      const searchableText = [product.title, product.brand, product.department, product.badge].join(" ").toLowerCase();
      return matchesCategory && searchableText.includes(cleanSearchText);
    });

    return [...visibleProducts].sort((firstProduct, secondProduct) => {
      if (sortBy === "low") return firstProduct.pricing.current - secondProduct.pricing.current;
      if (sortBy === "high") return secondProduct.pricing.current - firstProduct.pricing.current;
      if (sortBy === "rating") return secondProduct.rating.score - firstProduct.rating.score;
      if (sortBy === "discount") return getDiscount(secondProduct) - getDiscount(firstProduct);
      return firstProduct.id - secondProduct.id;
    });
  }, [activeCategory, searchText, sortBy]);

  const bagProducts = useMemo(() => getBagProducts(bag, products), [bag]);

  useEffect(() => {
    const closeLayerFromKeyboard = (event) => {
      if (event.key === "Escape") {
        setIsBagOpen(false);
        setIsAuthOpen(false);
      }
    };

    window.addEventListener("keydown", closeLayerFromKeyboard);
    document.body.style.overflow = isBagOpen || isAuthOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("keydown", closeLayerFromKeyboard);
      document.body.style.overflow = "";
    };
  }, [isBagOpen, isAuthOpen]);

  const handleWishlistToggle = (productId) => {
    setWishlist((currentWishlist) =>
      currentWishlist.includes(productId)
        ? currentWishlist.filter((itemId) => itemId !== productId)
        : [...currentWishlist, productId]
    );
  };

  const handleBagToggle = (productId) => {
    setBag((currentBag) =>
      currentBag.includes(productId)
        ? currentBag.filter((itemId) => itemId !== productId)
        : [...currentBag, productId]
    );
  };

  const handleCategorySearch = (text) => {
    setActiveCategory("All");
    setSearchText(text);
    window.location.hash = "products";
  };

  const handleClearFilters = () => {
    setActiveCategory("All");
    setSearchText("");
    setSortBy("recommended");
  };

  const handleAuthOpen = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    setIsAuthOpen(false);
  };

  return (
    <div className="app">
      <Header
        activeCategory={activeCategory}
        bagCount={bag.length}
        currentUser={currentUser}
        navigationItems={navigationItems}
        onAuthOpen={handleAuthOpen}
        onBagOpen={() => setIsBagOpen(true)}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchText}
        searchText={searchText}
        wishlistCount={wishlist.length}
      />

      <main>
        <HeroSection couponBanner={couponBanner} slides={heroSlides} />
        <CategorySection categories={shoppingCategories} onCategorySearch={handleCategorySearch} />
        <DealsSection deals={brandDeals} />

        <section className="shoppingArea" id="products">
          <FilterSidebar
            activeCategory={activeCategory}
            categories={categoryFilters}
            onCategoryChange={setActiveCategory}
            onClearFilters={handleClearFilters}
            onSortChange={setSortBy}
            sortBy={sortBy}
            sortOptions={sortOptions}
          />

          <ProductGrid
            activeCategory={activeCategory}
            bag={bag}
            products={filteredProducts}
            searchText={searchText}
            wishlist={wishlist}
            onBagToggle={handleBagToggle}
            onWishlistToggle={handleWishlistToggle}
          />
        </section>
      </main>

      <Footer />

      {isBagOpen && (
        <BagDrawer
          bagProducts={bagProducts}
          onBagClose={() => setIsBagOpen(false)}
          onBagToggle={handleBagToggle}
        />
      )}

      {isAuthOpen && (
        <AuthModal
          mode={authMode}
          onClose={() => setIsAuthOpen(false)}
          onModeChange={setAuthMode}
          onSuccess={handleAuthSuccess}
        />
      )}
    </div>
  );
}

export default App;
