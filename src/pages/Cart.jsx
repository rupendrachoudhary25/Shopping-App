import { useContext } from "react";
import { ecomContext } from "../Home";

function Cart() {
  const { cart, handleRemoveFromCart } = useContext(ecomContext);

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
                <div className="buttons">
                  <div className="counterButton">
                    <button>+</button>
                    <p></p>
                    <button>-</button>
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
