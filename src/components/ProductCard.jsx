import { Heart, ShoppingBag, Star } from "lucide-react";
import { formatPrice, getDiscount } from "../utils/shop.js";

function ProductCard({ isInBag, isWishlisted, onBagToggle, onWishlistToggle, product }) {
  const discount = getDiscount(product);

  return (
    <article className="productCard">
      <div className="productImage">
        <img src={product.image} alt={product.title} />
        <button
          type="button"
          className={isWishlisted ? "wishlistButton saved" : "wishlistButton"}
          onClick={() => onWishlistToggle(product.id)}
          aria-pressed={isWishlisted}
        >
          <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} aria-hidden="true" />
          {isWishlisted ? "Saved" : "Save"}
        </button>
        <span>{product.badge}</span>
      </div>

      <div className="productInfo">
        <div className="rating"><Star size={13} fill="currentColor" aria-hidden="true" /> {product.rating.score} | {product.rating.count}</div>
        <strong>{product.brand}</strong>
        <p>{product.title}</p>
        <span className="deliveryText">{product.delivery}</span>

        <div className="priceRow">
          <span>{formatPrice(product.pricing.current)}</span>
          <del>{formatPrice(product.pricing.mrp)}</del>
          <small>{discount}% off</small>
        </div>

        <button type="button" className={isInBag ? "bagButton added" : "bagButton"} onClick={() => onBagToggle(product.id)}>
          <ShoppingBag size={16} aria-hidden="true" />
          {isInBag ? "Remove From Bag" : "Add To Bag"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
