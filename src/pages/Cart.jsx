import { useContext } from "react";
import { ecomContext } from "../Home";

function Cart() {
  const { cart } = useContext(ecomContext);

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="cartMain">
      <div className="cartProductDetail">
        {cart.map((product, index) => (
          <div key={index}>
            <div className="cartDetailLeft">
            <img
              src={product.attributes.image}
              alt={product.attributes.title}
            />
            </div>
            <div className="cartDetailRight">
            <h2>{product.attributes.title}</h2>
            <p>Price: {product.attributes.price}</p>
           
            </div>
          </div>
        ))}
      </div>
      <div className="totalAmount">
        
      </div>
      </div>
      
    </>
  );
}

export default Cart;
