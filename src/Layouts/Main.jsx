import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
      <div className="bg-slate-300 px-8 py-4 h-screen">
        <Outlet></Outlet>
      </div>
    );
};

export default Main;