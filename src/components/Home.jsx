import React from "react";
import Lottie from "lottie-react";
import render from "../../public/shopping.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-container grid grid-cols-1 md:grid-cols-2 p-5">
      <div className=" p-5  ">
        <span className="bg-[#FFC200] rounded-lg px-3 py-1 font-bold">
          On Sale!
        </span>
        <h1 className="text-5xl font-bold  mt-5">
          Affordable <br className="mt-4" />{" "}
          <span className="text-[#FFC200]">Fashion and Lifestyle</span>
          <br className="mt-4" /> Products
        </h1>
        <Link to="/shops">
          <button className="py-2 px-4 mt-10 bg-[#FFC200] font-bold text-lg rounded ">
            ➡ View Our Shop
          </button>
        </Link>
      </div>
      <div className="relative ">
        <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={render} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
