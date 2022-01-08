import React from 'react';
const Button = () => {
  return (
    <button
      type="button"
      onClick={() => {
        console.log('+1');
      }}
    >
      Load more
    </button>
  );
};
export default Button;
