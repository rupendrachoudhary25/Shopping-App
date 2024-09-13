import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import App from "./App";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

export const ecomContext = createContext(null);

function Home() {
  return (
    <BrowserRouter>
      <ecomContext.Provider value={{}}>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </ecomContext.Provider>
    </BrowserRouter>
  );
}

export default Home;
