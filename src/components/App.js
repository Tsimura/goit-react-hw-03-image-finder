import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyLoader from './Loader/Loader';
import imagesAPI from '../services/images-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import ModalWindow from './Modal/Modal';
import { AppWrapper } from './App.styled';

class App extends Component {
  state = {
    imageValue: '',
    images: [],
    currentPage: 1,
    loading: false,
    error: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevRequestValue = prevState.imageValue;
    const nextRequestValue = this.state.imageValue;
    const { images } = this.state;
    if (prevRequestValue !== nextRequestValue) {
      this.setState({ loading: true, images: [] });
      this.getImageFetch();
    }
    if (prevState.images.length !== images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleFormSubmit = imageValue => {
    this.setState({ imageValue });
  };

  getImageFetch = () => {
    const { imageValue } = this.state;

    setTimeout(() => {
      imagesAPI
        .fetchImages(imageValue, this.state.currentPage)
        .then(images => {
          console.log(images);

          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }, 1000);
  };

  setCurrentPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  showModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { loading, images, error, showModal } = this.state;

    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && (
          <Button
            loadMoreImages={this.getImageFetch}
            onClick={this.setCurrentPage}
          />
        )}

        {loading && (
          <MyLoader style={{ marginRight: 'auto', marginLeft: 'auto' }} />
        )}
        {error && <h2>Sorry, something went wrong: {error.message}</h2>}

        <ToastContainer position="top-center" autoClose={3000} />
        {showModal && (
          <ModalWindow>
            <img
              src="https://pixabay.com/get/ga3ee93ed08ceb9221332226843ef72cac23efa1b482ec39bfdee0063bc4f0ca3b4334dd656ded542b80496d16fe9a167c9d99bc0ad7280d9eb29cbc8c672055f_640.png"
              alt="cat"
            />
          </ModalWindow>
        )}
      </AppWrapper>
    );
  }
}

export default App;

// setTimeout!!!
// Error message
