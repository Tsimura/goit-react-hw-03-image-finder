import { GalleryItemWrapper } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onImageClick,
}) => {
  return (
    <GalleryItemWrapper>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => {
          onImageClick(largeImageURL);
        }}
      />
    </GalleryItemWrapper>
  );
};
export default ImageGalleryItem;
