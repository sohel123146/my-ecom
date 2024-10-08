import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleProduct from "./pages/SingleProduct";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "#F6F8FA",
      footer_bg: "0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route eaxct path="/about" element={<About />} />
          <Route eaxct path="/products" element={<Products />} />
          <Route eaxct path="/contact" element={<Contact />} />
          <Route eaxct path="/singleproduct/:id" element={<SingleProduct />} />
          <Route eaxct path="/cart" element={<Cart />} />
          <Route eaxct path="/errorpage" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
