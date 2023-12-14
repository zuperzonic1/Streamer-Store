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
  const [userProfile, setUserProfile] = useState({
    firstName: "Micheal",
    lastName: "Felobes",
    email: "micheal.felobes@dcmail.com",
    phoneNumber: "+1234567890",
  });

  const handleUserProfileChange = (updatedProfile) => {
    setUserProfile(updatedProfile);
  };

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // const handleChange = (e) => {
  //   setNamer(e.target.value);
  // };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        <Route path="/" element={<Layout />}>
          <Route path="cart" element={<Cart cart={cart} />} />
          <Route path="cart/cartconfirmation" element={<CartConfirmation />} />

          <Route
            path="profile"
            element={<Profile userProfile={userProfile} />}
          />
          <Route
            path="profile/profileedit"
            element={
              <ProfileEdit
                userProfile={userProfile}
                onProfileChange={handleUserProfileChange}
              />
            }
          />

          <Route path="categories" element={<Categories />} />
          <Route
            path="categories/:category"
            element={<Products addToCart={addToCart} />}
          />
          <Route
            path="product/:productName"
            element={<Product addToCart={addToCart} />}
          />
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
