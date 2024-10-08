import { useContext } from "react";
import { ecomContext } from "./Home";
import { Link } from "react-router-dom";

function App() {
  const { products, loading } = useContext(ecomContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  const featuredProducts = products.filter(
    (product) => product.attributes.featured === true
  );

  return (
    <>
      <section className="homeSection">
        <div className="miniSection">
          <div className="text">
            <h1>We are changing the way people shop</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
              dignissimos culpa aspernatur aliquid soluta pariatur, repudiandae
              nihil error repellat ipsum! Ad omnis culpa id quisquam, quis
              quaerat libero dolore fugiat.
            </p>
            <Link to="/products">Products</Link>
          </div>
        </div>
        <div className="miniSection">
          <div className="imagebackground">
            <img
              src="https://shopping-app-five-zeta.vercel.app/hero1-deae5a1f.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <h1>Featured Products</h1>
      <div className="product">
        {featuredProducts.map((product) => (
          <div key={product.id}>
            <img
              src={product.attributes.image}
              alt={product.attributes.title}
            />
            <h2>{product.attributes.title}</h2>
            <p>$ {product.attributes.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
