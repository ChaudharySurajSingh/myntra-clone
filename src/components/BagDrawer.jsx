import { BadgePercent, CreditCard, MapPin, ShieldCheck, ShoppingBag, Truck, X } from "lucide-react";
import { formatPrice, getBagSummary } from "../utils/shop.js";

function BagDrawer({ bagProducts, onBagClose, onBagToggle }) {
  const summary = getBagSummary(bagProducts);

  return (
    <div className="bagOverlay" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <div className="bagDrawer">
        <div className="bagTitle">
          <div>
            <p>Shopping Bag</p>
            <h2>{bagProducts.length} items selected</h2>
          </div>
          <button type="button" onClick={onBagClose} aria-label="Close bag">
            <X size={18} />
          </button>
        </div>

        <div className="bagItems">
          <div className="deliveryAddress">
            <MapPin size={18} aria-hidden="true" />
            <div>
              <strong>Deliver to Suraj, 110001</strong>
              <span>Estimated delivery in 2-4 days</span>
            </div>
            <button type="button">Change</button>
          </div>

          <div className="couponBox">
            <BadgePercent size={18} aria-hidden="true" />
            <div>
              <strong>Apply Coupons</strong>
              <span>Save more with bank and fashion offers</span>
            </div>
            <button type="button">Apply</button>
          </div>

          {bagProducts.length > 0 && <h3 className="bagSectionTitle">Items in bag</h3>}

          {bagProducts.map((product) => (
            <article className="bagItem" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <strong>{product.brand}</strong>
                <span>{product.name}</span>
                <p>{formatPrice(product.price)}</p>
                <small><Truck size={14} aria-hidden="true" /> {product.delivery}</small>
              </div>
              <button type="button" onClick={() => onBagToggle(product.id)}>Remove</button>
            </article>
          ))}
          {bagProducts.length === 0 && (
            <div className="bagEmpty">
              <ShoppingBag size={42} aria-hidden="true" />
              <strong>Your bag is empty</strong>
              <span>Add items from the product section to review checkout.</span>
            </div>
          )}
        </div>

        <div className="priceSummary">
          <h3>Price Details</h3>
          <div>
            <span>Total MRP</span>
            <strong>{formatPrice(summary.totalMrp)}</strong>
          </div>
          <div>
            <span>Discount</span>
            <strong className="greenText">{formatPrice(summary.discount)}</strong>
          </div>
          <div>
            <span>Platform Fee</span>
            <strong>{formatPrice(summary.platformFee)}</strong>
          </div>
          <div className="payableRow">
            <span>Total Amount</span>
            <strong>{formatPrice(summary.totalAmount)}</strong>
          </div>
          <div className="secureLine">
            <ShieldCheck size={16} aria-hidden="true" />
            <span>100% secure checkout</span>
          </div>
          <button type="button" disabled={!bagProducts.length}>
            <CreditCard size={17} aria-hidden="true" />
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default BagDrawer;
