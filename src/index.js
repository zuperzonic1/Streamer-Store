import ReactDOM from "react-dom";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Categories from "./pages/Imagine";
import Genres from "./pages/Genres";
import Profile from "./pages/Contact";
import ProfileEdit from "./pages/ContactConfirmation";
import NoPage from "./pages/NoPage";
import Rock from "./pages/Rock";
import Who from "./pages/Who";
import Cart from "./pages/About";
import CartConfirmation from "./pages/CartConfirmation";
import Layout from "./pages/Layout"; // Add this import statement
import "./index.css";
import Jazz from "./pages/Jazz";
import HipHop from "./pages/HipHop";

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

          <Route path="imagine" element={<Categories/>} />
    

          <Route path="genres" element={<Genres />} />
          <Route path="genres">
            <Route path="rock" element={<Rock />} />
            <Route path="jazz" element={<Jazz />} />
            <Route path="hiphop" element={<HipHop />} />
            <Route path="*" element={<Who />} />
          </Route>

        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
