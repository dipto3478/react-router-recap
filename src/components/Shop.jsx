import React from "react";

const Shop = ({ shop }) => {
  const { _id, picture, price, name } = shop;
  return (
    <div className="border-2 py-3 px-2 rounded-lg">
      <img className="w-72 h-72 mx-auto" src={picture} alt="product image" />
      <h3 className="font-bold text-xl mt-5 ">{name}</h3>
      <p className="font-bold">Price: ${price}</p>
      <button className="bg-[#FFC200] px-2 py-1 font-bold mt-5 rounded-lg w-full">
        Buy Now
      </button>
    </div>
  );
};

export default Shop;
