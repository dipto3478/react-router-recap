import React from "react";
import { useLoaderData } from "react-router-dom";
import Shop from "./Shop";

const Shops = () => {
  const shops = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
        {shops.map((shop) => (
          <Shop shop={shop} key={shop._id}></Shop>
        ))}
      </div>
    </div>
  );
};

export default Shops;
