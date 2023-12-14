import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import images from "./images";
import { useLocation } from "react-router-dom";

function CartConfirmation() {
  const navigate = useNavigate();
  const location = useLocation();
  const cart = location.state?.cart;

  function goToCategories(e) {
    e.preventDefault();
    navigate("/categories");
  }

  // borrowed from the stackoverflow masters
  const downloadImage = (imageName) => {
    // Get the image file reference from the imported images object
    const imageFile = images[imageName];
    if (!imageFile) {
      console.error("Image file not found for", imageName);
      return;
    }

    // Use fetch API to get the blob data for the image
    fetch(imageFile)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a blob URL for the image blob
        const blobUrl = window.URL.createObjectURL(blob);
        // Create a temporary anchor element and trigger the download
        const link = document.createElement("a");
        link.href = blobUrl;
        link.download = imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        // Revoke the blob URL after the download
        window.URL.revokeObjectURL(blobUrl);
      })
      .catch(console.error);
  };

  return (
    <form className="cart-confirm-top" onSubmit={goToCategories}>
      <section className="cart-container">
        <h1 className="confirmation-title">CART CONFIRMATION</h1>
        <div className="confirmation-message">
          <p>
            Thanks for your order, you can download your files right now by
            clicking on the download button below
          </p>
        </div>
        <div className="checkout-list">
          <section className="confirmation-items-container">
            {cart &&
              cart.map((item, index) => (
                <div key={index} className="confirmation-item">
                  <p className="product-name">{item.name}</p>
                  <p className="product-price">${item.price}</p>
                  <button
                    type="button"
                    onClick={() => downloadImage(item.image)}
                    className="product-download"
                  >
                    Download
                  </button>
                </div>
              ))}
          </section>
        </div>
        <input className="contact-button" type="submit" value="Back to store" />
      </section>
    </form>
  );
}

export default CartConfirmation;
