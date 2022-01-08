const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} style={{ width: '320px' }} />
    </li>
  );
};
export default ImageGalleryItem;
