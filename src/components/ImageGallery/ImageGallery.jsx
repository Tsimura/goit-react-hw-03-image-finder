import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          //   image={image}
          webformatURL={image.webformatURL}
          largeImageURL={image.largeImageURL}
          tags={image.tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
