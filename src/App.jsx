import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://strapi-store-server.onrender.com/api/products"
      );
      const featuredProducts = response.data.data.filter(
        (product) => product.attributes.featured === true
      );
      setProducts(featuredProducts);
      console.log(response.data.data);
      console.log(featuredProducts);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Featured Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={product.attributes.image}
              alt={product.attributes.title}
            />
            <h2>{product.attributes.title}</h2>
            <p>Price: {product.attributes.price}</p>
            <p>Description: {product.attributes.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
