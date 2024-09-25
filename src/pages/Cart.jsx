import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "../Home";

function Cart() {
  const { cart, handleRemoveFromCart } = useContext(ecomContext);

  const initialQuantities = {};

  cart.forEach((product) => {
    initialQuantities[product.id] = product.quantity || 1;
  });

  const [quantities, setQuantities] = useState(initialQuantities);

  const [subtotal, setSubtotal] = useState(0);
  const shippingCost = 10;
  const taxRate = 0.08;

  function handleInc(productId) {
    const newQuantities = { ...quantities };
    newQuantities[productId] = newQuantities[productId] + 1;
    setQuantities(newQuantities);
  }

  function handleDec(productId) {
    const newQuantities = {};
    for (const id in quantities) {
      newQuantities[id] = quantities[id];
    }

    if (newQuantities[productId] > 1) {
      newQuantities[productId]--;
    }
    setQuantities(newQuantities);
  }

  useEffect(() => {
    let newSubtotal = 0;
    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      const price = Number(product.attributes.price) || 0;
      newSubtotal += price * quantities[product.id];
    }
    setSubtotal(newSubtotal);
  }, [cart, quantities]);

  const taxAmount = subtotal * taxRate;
  const orderTotal = subtotal + shippingCost + taxAmount;

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
                <p>Price: ${Number(product.attributes.price).toFixed(2)}</p>
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
                    remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="totalAmount">
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Shipping: ${shippingCost.toFixed(2)}</p>
          <p>Tax: ${taxAmount.toFixed(2)}</p>
          <h3>Order Total: ${orderTotal.toFixed(2)}</h3>
          <Link to="/Login">Please LOGIN</Link>
        </div>
      </div>
    </>
  );
}

export default Cart;
