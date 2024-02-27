import React, { useEffect, useState } from 'react';
import './ImageGrid.css';

const ImageGrid = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=8`)
      .then(res => res.json())
      .then(images => {
        setImages(images);
      });
  }, []);
  console.log(images)

  return (
    <div className="content">
      <section className="grid">
        {images.map(image => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(
              image.height / image.width,
            )}`}
          >
            <img
              src={image.download_url}
              alt={image.author}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default ImageGrid;