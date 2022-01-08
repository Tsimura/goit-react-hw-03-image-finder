import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imagesAPI from '../services/images-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    imageValue: '',
    images: [],
    currentPage: 1,
    loading: false,
    error: null,
    status: 'idle',
  };

  handleFormSubmit = imageValue => {
    this.setState({ imageValue });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequestValue = prevState.imageValue;
    const nextRequestValue = this.state.imageValue;

    if (prevRequestValue !== nextRequestValue) {
      this.setState({ loading: true, images: [] });
      imagesAPI
        .fetchImages(nextRequestValue)
        .then(images => {
          console.log(images);
          this.setState({ images: [...images.hits] });
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  setCurrentPage = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { loading, images, error } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        <Button onClick={this.setCurrentPage} />

        {loading && <div>Loading...</div>}
        {error && <h1>{error.message}</h1>}

        <ToastContainer position="top-center" autoClose={3000} />
      </>
    );
  }
}

export default App;

// setTimeout!!!
// Error message
