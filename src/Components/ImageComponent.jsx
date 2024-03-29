import React from "react";
import TickComponent from "./TickComponent";

const ImageComponent = ({
  index,
  image,
  selectedImages,
  imageThatHovered,
  dragInitialization,
  dragFinishing,
  handleDragAndDrop,
  imageSelectionOrNot,
  enterMouse,
  mouseLeave,
  className,
}) => {
  return (
    <div
      key={index}
      className={`cursor-pointer image-div rounded-lg border-2 border-solid relative ${className}`}
      onDragStart={(e) => dragInitialization(e, index)}
      onDragOver={(e) => dragFinishing(e)}
      onDrop={(e) => handleDragAndDrop(e, index)}
      draggable
      onClick={() => imageSelectionOrNot(index)}
      onMouseEnter={() => enterMouse(index)}
      onMouseLeave={mouseLeave}
    >
      <img className="h-full w-full" src={image} alt="" />

      {selectedImages.includes(index) && (
        <TickComponent className="absolute text-sm top-4 left-4 selected-tick"></TickComponent>
      )}
      {!selectedImages.includes(index) && imageThatHovered === index && (
        <div className="h-7 w-6 rounded bg-white border-black border-2 absolute top-4 left-4"></div>
      )}
    </div>
  );
};

export default ImageComponent;
