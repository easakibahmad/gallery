import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-slate-300 px-8 pt-4 pb-8 flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
