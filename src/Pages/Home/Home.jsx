import React, { useState } from "react";
import img1 from "../../assets/images/image-1.webp";
import img2 from "../../assets/images/image-2.webp";
import img3 from "../../assets/images/image-3.webp";
import img4 from "../../assets/images/image-4.webp";
import img5 from "../../assets/images/image-5.webp";
import img6 from "../../assets/images/image-6.webp";
import img7 from "../../assets/images/image-7.webp";
import img8 from "../../assets/images/image-8.webp";
import img9 from "../../assets/images/image-9.webp";
import img10 from "../../assets/images/image-10.jpeg";
import img11 from "../../assets/images/image-11.jpeg";

import "../Home/Home.css";
import ImageComponent from "../../Components/ImageComponent";
import TickComponent from "../../Components/TickComponent";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  //  initial state for each images in images array
  const [images, setImages] = useState([
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ]);

  // state for deleting single or multiple image at a time
  const [selectedImages, setSelectedImages] = useState([]);

  // for div that will visible when hover, and not selected that image
  const [imageThatHovered, setImageThatHovered] = useState(null);

  const enterMouse = (index) => {
    setImageThatHovered(index);
  };

  const mouseLeave = () => {
    setImageThatHovered(null);
  };

  // function for drag initialization
  const dragInitialization = (e, index) => {
    e.dataTransfer.setData("prevIndex", index);
  };

  // function for  drag finishing
  const dragFinishing = (e) => {
    e.preventDefault();
  };

  // drag and drop handling function
  const handleDragAndDrop = (e, currentIndex) => {
    e.preventDefault();
    const prevIndex = e.dataTransfer.getData("prevIndex");

    const modifiedImages = [...images];

    // remove dragged image from its previous position
    const draggedImage = modifiedImages.splice(prevIndex, 1)[0];

    // image insert in new position
    modifiedImages.splice(currentIndex, 0, draggedImage);

    setImages(modifiedImages);
  };

  // function for selected images
  const imageSelectionOrNot = (index) => {
    if (selectedImages.includes(index)) {
      setSelectedImages(selectedImages.filter((i) => i !== index));
    } else {
      setSelectedImages([...selectedImages, index]);
    }
  };

  // function for image deleting
  const deleteImages = () => {
    const modifiedImages = images.filter(
      (_, index) => !selectedImages.includes(index)
    );
    setImages(modifiedImages);
    setSelectedImages([]);
  };

  return (
    <div className="grid grid-cols-1 rounded-2xl bg-white">
      <div className="flex items-center justify-between px-16 py-6 border-b-2">
        {/* if image is selected, then gallery word will be hidden. */}
        <div>
          {selectedImages.length > 0 ? (
            selectedImages.length == 1 ? (
              <div className="flex gap-2 items-center">
                <TickComponent className="text-sm"></TickComponent>
                <span className="pt-0 text-xl font-bold">
                  {selectedImages.length} File Selected
                </span>
              </div>
            ) : (
              <div className="flex gap-2 items-center">
                <TickComponent className="text-sm"></TickComponent>
                <span className="pt-0 text-xl font-bold">
                  {selectedImages.length} Files Selected
                </span>
              </div>
            )
          ) : (
            <span className="pt-0 text-xl font-bold">Gallery</span>
          )}
        </div>

        {/* one or more images selected that means those can be deleted. so delete button will be visible, neither it will not. */}
        <div>
          {selectedImages.length > 0 && (
            <button onClick={deleteImages} className="ml-2 text-red-600">
              <span className="btn btn-xs btn-outline btn-error">
                Delete files
              </span>
            </button>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 items-center col-span-2 gap-8 w-full py-8 px-14">
        {/* here we have to create grid layout and first item col-span is 2 and row span also 2 in large devices, thats why write conditionally to show the images  */}
        {images.map((image, index) =>
          image == images[0] ? (
            <>
              {/* this is for first image  with additional tailwind class that passed by props*/}
              <ImageComponent
                key={index}
                index={index}
                image={image}
                selectedImages={selectedImages}
                imageThatHovered={imageThatHovered}
                dragInitialization={(e, index) => dragInitialization(e, index)}
                dragFinishing={dragFinishing}
                handleDragAndDrop={(e, currentIndex) =>
                  handleDragAndDrop(e, currentIndex)
                }
                imageSelectionOrNot={(index) => imageSelectionOrNot(index)}
                enterMouse={() => enterMouse(index)}
                mouseLeave={mouseLeave}
                className="col-span-2 lg:row-span-2 md:row-span-2 additional-class"
              />
            </>
          ) : (
            <>
              {/* this is for remaining images without first one  */}
              <ImageComponent
                key={index}
                index={index}
                image={image}
                selectedImages={selectedImages}
                imageThatHovered={imageThatHovered}
                dragInitialization={(e, index) => dragInitialization(e, index)}
                dragFinishing={dragFinishing}
                handleDragAndDrop={(e, currentIndex) =>
                  handleDragAndDrop(e, currentIndex)
                }
                imageSelectionOrNot={(index) => imageSelectionOrNot(index)}
                enterMouse={() => enterMouse(index)}
                mouseLeave={mouseLeave}
                className=""
              />
            </>
          )
        )}
        {/* this input is for uploading images */}
        <div className="relative border-2 border-dotted lg:h-52 md:h-40 h-48 rounded-lg">
          <input
            type="file"
            className="w-full hidden cursor-pointer border-2 border-dotted h-full rounded-lg relative"
            accept="image/*"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center">
            <div className="grid grid-cols-1 items-center">
              <span className="mx-auto text-xl font-bold mb-2">
                <FontAwesomeIcon icon={faImage} />
              </span>
              <span className="text-xs">Add Images</span>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
