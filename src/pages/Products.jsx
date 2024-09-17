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
              <option value="all" defaultValue>
                All
              </option>
              <option value="table">Table</option>
              <option value="chair">Chair</option>
              <option value="kids">Kids</option>
              <option value="sofas">Sofas</option>
              <option value="beds">Beds</option>
            </select>
            <br />
            <label htmlFor="select2">Select Company</label>
            <br />
            <select id="select2" name="select2">
              <option value="all" defaultValue>
                All
              </option>
              <option value="modenza">Modenza</option>
              <option value="luxora">Luxora</option>
              <option value="artifex">Artifex</option>
              <option value="comfora">Comfora</option>
              <option value="homestead">Homestead</option>
            </select>
            <br />
            <label htmlFor="select3">Sorted by</label>
            <br />
            <select id="select3" name="select3">
              <option value="a-z" defaultValue>
                a-z
              </option>
              <option value="z-a">z-a</option>
              <option value="low-high">low-high</option>
              <option value="high-low">high-low</option>
            </select>
            <br />
            <button type="button">ClearFilter</button>
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
