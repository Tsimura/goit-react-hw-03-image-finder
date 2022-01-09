import { GalleryItemWrapper } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <GalleryItemWrapper>
      <img src={webformatURL} alt={tags} />
    </GalleryItemWrapper>
  );
};
export default ImageGalleryItem;
