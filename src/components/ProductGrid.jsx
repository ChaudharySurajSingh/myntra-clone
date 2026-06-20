import ProductCard from "./ProductCard.jsx";

function ProductGrid({ activeCategory, bag, products, searchText, wishlist, onBagToggle, onWishlistToggle }) {
  return (
    <section className="productSection">
      <div className="productHeader">
        <div>
          <p>Myntra Picks</p>
          <h2>{products.length} items for you</h2>
        </div>
        <span>{searchText ? `Search: ${searchText}` : activeCategory === "All" ? "All categories" : activeCategory}</span>
      </div>

      <div className="productGrid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isInBag={bag.includes(product.id)}
            isWishlisted={wishlist.includes(product.id)}
            onBagToggle={onBagToggle}
            onWishlistToggle={onWishlistToggle}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="emptyState">
          <h3>No matching products</h3>
          <p>Try another brand, category, or product name.</p>
        </div>
      )}
    </section>
  );
}

export default ProductGrid;
