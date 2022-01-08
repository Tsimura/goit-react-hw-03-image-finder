import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = { imageValue: '', images: [] };
  handleFormSubmit = imageValue => {
    this.setState({ imageValue });
    console.log('imageValue:', imageValue);
  };

  componentDidUpdate(prevProps, prevState) {
    const BASE_URL = 'https://pixabay.com/api';
    const prevRequestValue = prevState.imageValue;
    const nextRequestValue = this.state.imageValue;
    if (prevRequestValue !== nextRequestValue) {
      const KEY = '24121745-05691669c6e1f2eaf3f0511ee';
      const FILTER = 'image_type=photo&orientation=horizontal';
      fetch(
        `${BASE_URL}/?q=${nextRequestValue}&page=1&key=${KEY}&${FILTER}&per_page=12`,
      )
        .then(res => res.json())
        .then(images =>
          this.setState({
            images: [...images.hits],
          }),
        );
    }
  }

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}

        <ToastContainer position="top-center" autoClose={3000} />
      </>
    );
  }
}

export default App;
