import ReactDOM from "react-dom";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Profile from "./pages/Contact";
import ProfileEdit from "./pages/ContactConfirmation";
import NoPage from "./pages/NoPage";
// import Who from "./pages/Who";
import Cart from "./pages/About";
import CartConfirmation from "./pages/CartConfirmation";
import Layout from "./pages/Layout"; // Add this import statement
import "./index.css";

export default function App() {


  // const handleChange = (e) => {
  //   setNamer(e.target.value);
  // };


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn  />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />


        <Route element={<Layout />}>

          <Route path="cart" element={<Cart />} />
          <Route path="cart"> 
            <Route  path="cartconfirmation" element={<CartConfirmation />}/>
          </Route>

          <Route path="profile" element={<Profile/>} />
          <Route path="profile"> 
            <Route  path="profileedit" element={<ProfileEdit />}/>
          </Route>

          <Route path="categories" element={<Categories/>} />

          <Route path="categories">
          <Route path="chair" element={<Products />} />
          <Route path="texture" element={<Products />} />
          <Route path="layout" element={<Products />} />
          <Route path="product" element={<Product />} />
          </Route>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
