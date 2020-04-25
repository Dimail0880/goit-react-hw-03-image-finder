import React from "react";
import ImageGalleryItem from "./ImageGalleryItem";

const ImageGallery = ({ pics }) => {
  return (
    <ul className="ImageGallery">
      {pics.map((el) => (
        <ImageGalleryItem
          key={el.id}
          webformatURL={el.webformatURL}
          tags={el.tags}
          largeImageURL={el.largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
