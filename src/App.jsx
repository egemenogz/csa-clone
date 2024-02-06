import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./comp/Header";
import Home from "./comp/Home";
import FooterCsa from "./comp/components/FooterCsa";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import AllCategories from "./comp/categories/AllCategories"
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HeadBottom from "./comp/HeadBottom";

function App() {
  return (
    <>
      <Header />
      <HeadBottom />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="//all%categories" element={<AllCategories />} />
        </Routes>
      </div>
      <FooterCsa />
    </>
  );
}

export default App;
