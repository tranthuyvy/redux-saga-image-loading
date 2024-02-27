import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({ isLoading, images, error }) => ({
  isLoading,
  images,
  error
})

export default connect(
  mapStateToProps,
  null
)(ImageGrid);