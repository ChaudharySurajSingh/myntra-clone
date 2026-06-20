function CategorySection({ categories, onCategorySearch }) {
  return (
    <section className="categorySection">
      <h2>Shop By Category</h2>
      <div className="categoryGrid">
        {categories.map((category) => (
          <button className="categoryCard" key={category.id} type="button" onClick={() => onCategorySearch(category.searchText)}>
            <img src={category.image} alt={category.name} />
            <strong>{category.name}</strong>
            <span>{category.discount}</span>
            <small>Shop Now</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
