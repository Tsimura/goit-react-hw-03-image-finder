import React, { Component } from 'react';
import { Overlay, Modal } from './Modal.styled';

class ModalWindow extends Component {
  render() {
    return (
      <>
        <Overlay>
          <Modal>
            {this.props.children}
            {/* <img src="" alt="" /> */}
          </Modal>
        </Overlay>
      </>
    );
  }
}

export default ModalWindow;
