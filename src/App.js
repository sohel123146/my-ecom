import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route eaxct path="/about" element={<About />}/> 
        <Route eaxct path="/products" element={<Products />}/> 
        <Route eaxct path="/contact" element={<Contact />}/> 
        <Route eaxct path="/singleproduct/:id" element={<SingleProduct />}/> 
        <Route eaxct path="/cart" element={<Cart />}/>
        <Route eaxct path="/errorpage" element={<ErrorPage />}/>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
