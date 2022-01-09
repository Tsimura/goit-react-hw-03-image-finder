import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryWrapper } from './ImageGallery.styled';
const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageGalleryWrapper>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onImageClick={onImageClick}
        />
      ))}
    </ImageGalleryWrapper>
  );
};
export default ImageGallery;
