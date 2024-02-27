import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loadImages } from "../../actions";
import "./ImageGrid.css";

const ImageGrid = () => {
  const dispatch = useDispatch();
  const { isLoading, images, error } = useSelector((state) => ({
    isLoading: state.isLoading,
    images: state.images,
    error: state.error,
    imageStats: state.imageStats,
  }));

  useEffect(() => {
    dispatch(loadImages());
  }, [dispatch]);

  const handleLoadMoreImages = () => {
    if (!isLoading) {
      dispatch(loadImages());
    }
  };

  return (
    <div className="content">
      <section className="grid">
        {images.map((image) => (
          <div
            key={image.id}
            className={`item item-${Math.ceil(image.height / image.width)}`}
          >
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      {error && <div className="error">{JSON.stringify(error)}</div>}
      <button onClick={handleLoadMoreImages} loading={isLoading}>
        More
      </button>
    </div>
  );
};

export default ImageGrid;
