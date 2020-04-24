import React, { Component } from "react";
import Modal from "../Modal/Modal";

export default class ImageGalleryItem extends Component {
  state = {
    modalWindow: false,
  };
  handleModalOn = () => {
    this.setState({
      modalWindow: true,
    });
  };
  closeModal = (e) => { if (e.target.nodeName === "DIV" || e.code === "Escape")
   { this.setState({
      modalWindow: false,
    })};}
    render()
    {
      const { webformatURL, tags, largeImageURL} = this.props;
      const { modalWindow } = this.state;
      return (
        
          <li className="ImageGalleryItem" >
            <img
              src={webformatURL}
              alt={tags}
              className="ImageGalleryItem-image"
              onClick={this.handleModalOn}
            />
            {modalWindow && (
            <Modal src={largeImageURL} closeModal={this.closeModal} />
          )}
        
          </li>
          
      );
    }
  };

