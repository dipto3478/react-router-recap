import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Shop from "../Shop";
import OverView from "../OverView";
import "./Shops.css";

const Shops = () => {
  const shops = useLoaderData();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (shops) => {
    const exists = cart.find((c) => c._id === shops._id);
    if (exists) {
    }
    const newCart = [...cart, shops];
    setCart(newCart);
  };

  const handleRemoveToCart = (id) => {
    const reaming = cart.filter((c) => c._id !== id);
    setCart(reaming);
  };

  return (
    <div className="my-container shop-container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {shops.map((shop) => (
          <Shop
            shop={shop}
            key={shop._id}
            handleAddToCart={handleAddToCart}
          ></Shop>
        ))}
      </div>
      <div className="p-5">
        <OverView
          handleRemoveToCart={handleRemoveToCart}
          cart={cart}
        ></OverView>
      </div>
    </div>
  );
};

export default Shops;
