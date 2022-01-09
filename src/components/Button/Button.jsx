import React from 'react';

const Button = ({ loadMoreImages, onClick }) => {
  const handleClick = async () => {
    await onClick();
    loadMoreImages();
  };
  return (
    <button type="button" onClick={handleClick}>
      Load more
    </button>
  );
};
export default Button;
