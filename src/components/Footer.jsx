import { RefreshCcw, ShieldCheck } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Online Shopping</h3>
        <a href="#home">Men</a>
        <a href="#home">Women</a>
        <a href="#home">Kids</a>
        <a href="#home">Home & Living</a>
        <a href="#home">Beauty</a>
      </div>

      <div>
        <h3>Customer Policies</h3>
        <a href="#home">Contact Us</a>
        <a href="#home">FAQ</a>
        <a href="#home">Shipping</a>
        <a href="#home">Returns</a>
        <a href="#home">Privacy Policy</a>
      </div>

      <div>
        <h3>Experience Myntra App On Mobile</h3>
        <p>Get app-only deals, quicker checkout and order updates.</p>
        <div className="footerTrust">
          <span><ShieldCheck size={20} /> 100% original guarantee for all products</span>
          <span><RefreshCcw size={20} /> Return within 14 days of receiving your order</span>
        </div>
      </div>

      <div className="footerWide">
        <h3>Popular Searches</h3>
        <p>Makeup Dresses For Girls T-Shirts Sandals Headphones Blazers For Men Handbags Watches Bags Sports Shoes Kurtis Nike Smart Watches Designer Blouse Gowns Rings Sarees Dresses Lehenga Goggles Bras Chinos Adidas Shoes Jewellery</p>
        <p>Built with React component architecture, data-driven rendering, search, sorting, wishlist, login/signup, bag drawer, checkout summary and responsive UI.</p>
      </div>
    </footer>
  );
}

export default Footer;
