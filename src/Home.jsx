import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import App from "./App";
import Cart from "./pages/Cart";
import Products from "./pages/Products";
import ProductDetail from "./components/ProductDetail";

export const ecomContext = createContext(null);
function Home() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [company, setCompany] = useState("all");
  const [sortOption, setSortOption] = useState("a-z");

  function handleRemoveFromCart(productID) {
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== productID;
      })
    );
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://strapi-store-server.onrender.com/api/products"
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <ecomContext.Provider
        value={{
          cart,
          setCart,
          products,
          loading,
          handleRemoveFromCart,
          searchTerm,
          setSearchTerm,
          category,
          setCategory,
          company,
          setCompany,
          sortOption,
          setSortOption,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </ecomContext.Provider>
    </BrowserRouter>
  );
}

export default Home;
