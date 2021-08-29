import React, { useState, useMemo } from "react";
import "../styles/ImagesStyle.css";

const Images = ({ images, loading }) => {
  const [imgs, setImgs] = useState([]);
  const [x, setX] = useState(true);
  useMemo(() => {
    setImgs(images);
  }, [images]);
  const removeImage = (index) => {
    imgs.splice(index, 1);
    setX((prev) => {
      return !prev;
    });
  };
  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (imgs.length === 0 && loading === false) {
    return <h4>Please go to the next Page</h4>;
  }
  return (
    <>
      {imgs.map((image, i) => (
        <div className="image" key={image.id}>
          <div className="imgDiv">
            <img key={image.id} src={image.url} alt={image.title} />
            <span onClick={() => removeImage(i)}>X</span>
          </div>
          <h4>{image.title}</h4>
        </div>
      ))}
    </>
  );
};

export default Images;
