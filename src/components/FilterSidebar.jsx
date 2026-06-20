function FilterSidebar({ activeCategory, categories, onCategoryChange, onClearFilters, onSortChange, sortBy, sortOptions }) {
  return (
    <aside className="filterPanel">
      <div className="filterHeader">
        <h2>Filters</h2>
        <button type="button" onClick={onClearFilters}>Clear</button>
      </div>

      <div>
        <p>Category</p>
        {categories.map((item) => (
          <button key={item} className={activeCategory === item ? "filterButton selected" : "filterButton"} onClick={() => onCategoryChange(item)}>
            {item}
          </button>
        ))}
      </div>

      <div>
        <p>Sort By</p>
        <select value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </select>
      </div>

      <div className="deliveryBox">
        <strong>Express Delivery</strong>
        <span>Most products reach metro cities in 2 days.</span>
      </div>
    </aside>
  );
}

export default FilterSidebar;
