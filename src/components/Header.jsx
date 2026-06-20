import { Heart, Search, ShoppingBag, UserRound } from "lucide-react";

const navigationMenus = {
  Men: [
    { title: "Topwear", items: ["T-Shirts", "Casual Shirts", "Formal Shirts", "Sweatshirts", "Jackets"] },
    { title: "Bottomwear", items: ["Jeans", "Casual Trousers", "Shorts", "Track Pants"] },
    { title: "Footwear", items: ["Casual Shoes", "Sports Shoes", "Sneakers", "Sandals"] },
    { title: "Sports", items: ["Active T-Shirts", "Track Pants", "Sports Shoes", "Gym Bags"] }
  ],
  Women: [
    { title: "Indian Wear", items: ["Kurtas", "Sarees", "Ethnic Dresses", "Dupattas"] },
    { title: "Western Wear", items: ["Dresses", "Tops", "Jeans", "Jackets"] },
    { title: "Footwear", items: ["Flats", "Heels", "Casual Shoes", "Sports Shoes"] },
    { title: "Beauty", items: ["Makeup", "Skincare", "Fragrances", "Haircare"] }
  ],
  Kids: [
    { title: "Boys Clothing", items: ["T-Shirts", "Shirts", "Jeans", "Shorts"] },
    { title: "Girls Clothing", items: ["Dresses", "Tops", "Skirts", "Ethnic Wear"] },
    { title: "Footwear", items: ["Casual Shoes", "Sports Shoes", "Sandals"] },
    { title: "Toys", items: ["Learning Toys", "Soft Toys", "Action Figures"] }
  ],
  Home: [
    { title: "Bed Linen", items: ["Bedsheets", "Blankets", "Pillows", "Bed Covers"] },
    { title: "Decor", items: ["Lamps", "Wall Decor", "Clocks", "Mirrors"] },
    { title: "Kitchen", items: ["Dinnerware", "Cookware", "Storage"] },
    { title: "Bath", items: ["Towels", "Bath Robes", "Mats"] }
  ],
  Beauty: [
    { title: "Makeup", items: ["Lipstick", "Foundation", "Mascara", "Kajal"] },
    { title: "Skincare", items: ["Moisturiser", "Sunscreen", "Face Wash", "Serum"] },
    { title: "Haircare", items: ["Shampoo", "Conditioner", "Hair Oil"] },
    { title: "Fragrance", items: ["Perfume", "Deodorant", "Body Mist"] }
  ],
  Genz: [
    { title: "Trends", items: ["Oversized Tees", "Cargo Pants", "Sneakers", "Denim Jackets"] },
    { title: "Creators Pick", items: ["Streetwear", "Graphic Prints", "Co-ords", "Party Fits"] },
    { title: "Budget Buys", items: ["Under 499", "Under 999", "Deals Today"] },
    { title: "Accessories", items: ["Caps", "Backpacks", "Sunglasses"] }
  ]
};

function Header({
  activeCategory,
  bagCount,
  currentUser,
  navigationItems,
  onAuthOpen,
  onBagOpen,
  onCategoryChange,
  searchText,
  wishlistCount,
  onSearchChange
}) {
  return (
    <header className="topHeader">
      <a className="brandLogo" href="#home" aria-label="Myntra clone home" onClick={() => onCategoryChange("All")}>
        <img src="/images/myntra-logo.webp" alt="Myntra logo" />
      </a>

      <nav className="mainNav" aria-label="Main navigation">
        {navigationItems.map((item) => (
          <div className="navItem" key={item}>
            <button className={activeCategory === item ? "navButton active" : "navButton"} onClick={() => onCategoryChange(item)}>
              {item}
            </button>
            <div className="navDropdown">
              {navigationMenus[item].map((section) => (
                <div className="navMenuColumn" key={section.title}>
                  <h4>{section.title}</h4>
                  {section.items.map((menuItem) => (
                    <button
                      type="button"
                      key={menuItem}
                      onClick={() => {
                        onCategoryChange(item);
                        onSearchChange(menuItem);
                        window.location.hash = "products";
                      }}
                    >
                      {menuItem}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
        <a className="studioLink" href="#products" onClick={() => onCategoryChange("Genz")}>
          Studio <span>New</span>
        </a>
      </nav>

      <label className="searchBox">
        <Search size={18} aria-hidden="true" />
        <input
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search for products, brands and more"
        />
      </label>

      <div className="headerActions">
        <button type="button" onClick={() => onAuthOpen("login")}>
          <UserRound size={20} aria-hidden="true" />
          <strong>Profile</strong>
          <small>{currentUser ? currentUser.name : "Sign in"}</small>
        </button>
        <button type="button">
          <Heart size={20} aria-hidden="true" />
          <strong>Wishlist</strong>
          <small>{wishlistCount} saved</small>
        </button>
        <button className="bagAction" type="button" onClick={onBagOpen}>
          <ShoppingBag size={20} aria-hidden="true" />
          {bagCount > 0 && <span>{bagCount}</span>}
          <strong>Bag</strong>
          <small>{bagCount} items</small>
        </button>
      </div>
    </header>
  );
}

export default Header;
