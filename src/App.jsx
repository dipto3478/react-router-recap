import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <div className="bg-slate-400">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default App;
