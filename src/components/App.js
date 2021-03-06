import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
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
    largeImage: '',
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
      this.scrollToBottom();
    }
  }
  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  handleFormSubmit = imageValue => {
    this.setState({ imageValue });
  };
  getImageFetch = () => {
    const { imageValue } = this.state;
    imagesAPI
      .fetchImages(imageValue, this.state.currentPage)
      .then(images => {
        if (images.hits.length === 0) {
          toast.info('There is no result for your request!');
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  setCurrentPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };
  handleGalleryItemClick = largeImageURL => {
    this.setState({ largeImage: largeImageURL, showModal: true });
  };
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImage: '',
    }));
  };
  render() {
    const { loading, images, largeImage, error, showModal } = this.state;
    const showSearchResults = images.length;
    return (
      <AppWrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {showSearchResults > 0 && (
          <>
            <ImageGallery
              images={images}
              onImageClick={this.handleGalleryItemClick}
            />
            <Button
              loadMoreImages={this.getImageFetch}
              onClick={this.setCurrentPage}
            />
          </>
        )}
        {loading && (
          <MyLoader style={{ marginRight: 'auto', marginLeft: 'auto' }} />
        )}
        {showModal && (
          <ModalWindow onClose={this.toggleModal}>
            <img src={largeImage} alt="currentLargeImage" />
          </ModalWindow>
        )}
        {error && <h2>Sorry, something went wrong: {error.message}</h2>}
        <ToastContainer position="top-center" autoClose={3000} />
      </AppWrapper>
    );
  }
}
export default App;
