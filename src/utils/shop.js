export function formatPrice(amount) {
  return `Rs. ${amount.toLocaleString("en-IN")}`;
}

export function getDiscount(product) {
  return Math.round(((product.pricing.mrp - product.pricing.current) / product.pricing.mrp) * 100);
}

export function getBagProducts(productIds, products) {
  return productIds.map((productId) => products.find((product) => product.id === productId)).filter(Boolean);
}

export function getBagSummary(products) {
  const totalMrp = products.reduce((total, product) => total + product.pricing.mrp, 0);
  const itemTotal = products.reduce((total, product) => total + product.pricing.current, 0);
  const discount = totalMrp - itemTotal;
  const platformFee = products.length ? 20 : 0;
  const totalAmount = itemTotal + platformFee;

  return { totalMrp, itemTotal, discount, platformFee, totalAmount };
}
