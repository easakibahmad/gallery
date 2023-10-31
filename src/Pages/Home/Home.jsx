import React, { useState } from "react";
import img1 from "../../assets/images/image-1.webp"
import img2 from "../../assets/images/image-2.webp"

const Home = () =>
{   
  return (
    <div className="grid grid-cols-1 m-4">
      <div>
        <h1>Gallery</h1>
      </div>
      <div className="grid grid-cols-5 gap-5 w-full p-4">
        <div className="cursor-pointer col-span-2 hover:brightness-50 rounded-lg h-80 mb-3 row-span-2 border-2 border-solid">
          <img className="h-full w-full" src={img1} alt="" />
        </div>
        <div className="cursor-pointer h-36 hover:brightness-50 rounded-lg border-2 relative border-solid">
          <img className="w-full h-full" src={img2} alt="" />
        </div>

        <div className="h-36 border-2 border-dotted">
          <input type="file" className="w-full" accept="image/*" />
        </div>
      </div>
    </div>
  );
};

export default Home;