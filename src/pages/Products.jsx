import { useContext } from "react";
import { ecomContext } from "../Home";
import { Link } from "react-router-dom";

function Products() {
  const { products, loading } = useContext(ecomContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>All Products</h1>
      <div className="productsMain">
        <div className="search">
          <form id="myForm">
            <label htmlFor="input">Search Products</label> <br />
            <input type="text" id="input" />
            <br />
            <label htmlFor="select1">Search Category</label>
            <br />
            <select id="select1" name="select1">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
            <br />
            <label htmlFor="select2">Select Company</label>
            <br />
            <select id="select2" name="select2">
              <option value="optionA">Option A</option>
              <option value="optionB">Option B</option>
              <option value="optionC">Option C</option>
            </select>
            <br />
            <label htmlFor="select3">Sorted by</label>
            <br />
            <select id="select3" name="select3">
              <option value="optionX">Option X</option>
              <option value="optionY">Option Y</option>
              <option value="optionZ">Option Z</option>
            </select>
            <br />
            <button type="button">
              ClearFilter
            </button>
          </form>
        </div>
        <div className="products">
          {products.map((product) => (
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
