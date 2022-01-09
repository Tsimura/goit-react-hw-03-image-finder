import { LoadMoreBtn } from './Button.styled';
const Button = ({ loadMoreImages, onClick }) => {
  const handleClick = async () => {
    await onClick();
    loadMoreImages();
  };
  return (
    <LoadMoreBtn type="button" onClick={handleClick}>
      Load more
    </LoadMoreBtn>
  );
};
export default Button;
