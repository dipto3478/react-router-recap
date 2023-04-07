import React from "react";

const OverView = ({ cart, handleRemoveToCart }) => {
  return (
    <div className="border-2 rounded-lg p-5">
      <h3 className="font-bold text-xl text-center underline">Order summary</h3>
      {cart.map((c, i) => (
        <p key={i} className="my-5">
          {c.name}
          <button
            onClick={() => handleRemoveToCart(c._id)}
            className="bg-yellow-500 py-1 px-2"
          >
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default OverView;
