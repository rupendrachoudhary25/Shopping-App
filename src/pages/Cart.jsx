import { useContext, useState } from "react";
import { ecomContext } from "../Home";

function Cart() {
  const { cart, handleRemoveFromCart } = useContext(ecomContext);

  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = product.quantity || 1;
      // console.log(acc);
      return acc;
    }, {})
  );

  // Function to handle increment of quantity
  function handleInc(productId) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: prevQuantities[productId] + 1,
    }));
  }

  // Function to handle decrement of quantity
  function handleDec(productId) {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(prevQuantities[productId] - 1,1),
    }));
  }


  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="cartMain">
        <div className="cartProductDetail">
          {cart.map((product) => (
            <div key={product.id}>
              <div className="cartDetailLeft">
                <img
                  src={product.attributes.image}
                  alt={product.attributes.title}
                />
              </div>
              <div className="cartDetailRight">
                <h2>{product.attributes.title}</h2>
                <p>Price: {product.attributes.price}</p>
                <div className="buttons">
                  <div className="counterButton">
                    <button onClick={() => handleInc(product.id)}>+</button>
                    <p className="Quantity">{quantities[product.id]}</p>
                    <button onClick={() => handleDec(product.id)}>-</button>
                  </div>
                  <button
                    className="removeButton"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="totalAmount">
          <p>SubTotal :</p>
          <p>Shipping :</p>
          <p>Tax :</p>
          <h3>Order Total</h3>
          <button>Please LOGIN</button>
        </div>
      </div>
    </>
  );
}

export default Cart;
