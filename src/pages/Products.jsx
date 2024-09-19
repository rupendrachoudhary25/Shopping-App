import { useContext } from "react";
import { ecomContext } from "../Home";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function Products() {
  const {
    products,
    loading,
    searchTerm,
    category,
    company,
    sortOption,
  } = useContext(ecomContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredProducts = products
    .filter((product) => {
      const title = product.attributes.title.toLowerCase();
      const searchFilter = searchTerm
        ? title.includes(searchTerm.toLowerCase())
        : true;

      const categoryFilter =
        category === "all" || product.attributes.category === category;

      const companyFilter =
        company === "all" || product.attributes.company === company;

      return searchFilter && categoryFilter && companyFilter;
    })
    .sort((a, b) => {
      if (sortOption === "a-z") {
        return a.attributes.title.localeCompare(b.attributes.title);
      } else if (sortOption === "z-a") {
        return b.attributes.title.localeCompare(a.attributes.title);
      } else if (sortOption === "low-high") {
        return a.attributes.price - b.attributes.price;
      } else if (sortOption === "high-low") {
        return b.attributes.price - a.attributes.price;
      } else {
        return 0;
      }
    });

  return (
    <>
      <h1>All Products</h1>
      <div className="productsMain">
        <Search />
        <div className="products">
          {filteredProducts.map((product) => (
            <div className="allproduct" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.attributes.image}
                  alt={product.attributes.title}
                />
                <h2>{product.attributes.title}</h2>
                <p>Price: {product.attributes.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
