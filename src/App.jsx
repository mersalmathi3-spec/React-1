import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      desc: "High performance laptop",
      price: 50000,
      image: "💻",
    },
    {
      id: 2,
      name: "Mobile",
      desc: "Latest model smartphone",
      price: 20000,
      image: "📱",
    },
    {
      id: 3,
      name: "Headphone",
      desc: "Noise cancelling headphone",
      price: 2000,
      image: "🎧",
    },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>🛒 Mini E-Commerce Cart System</h1>

      <div className="main-layout">
        <div className="products-section">
          <h2>Products</h2>

          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="icon">{product.image}</div>

              <div className="info">
                <h3>{product.name}</h3>
                <p>{product.desc}</p>
                <h4>₹{product.price}</h4>
              </div>

              <button
                className="add-btn"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          ))}
        </div>

        <div className="cart-section">
          <h2>Shopping Cart</h2>

          <p className="badge">{cart.length} Items</p>

          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <span>{item.image}</span>

              <div>
                <b>{item.name}</b>
                <p>₹{item.price}</p>
              </div>

              <button
                className="delete-btn"
                onClick={() => removeItem(index)}
              >
                ❌
              </button>
            </div>
          ))}

          <div className="total-box">
            <h3>Total Price</h3>
            <h2>₹{total}</h2>
          </div>

          <button className="checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;