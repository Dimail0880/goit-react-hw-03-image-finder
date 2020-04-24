import React, { Component } from 'react';

export default class Modal extends Component {
  state = {};


  componentDidMount() {
    window.addEventListener('keydown', this.props.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.closeModal);
  }

  render() {
    const { closeModal, src } = this.props;
    return (
        <div className="Overlay" onClick={closeModal} >
              <div className="Modal" >
              <img src={src} alt="" />
            </div>
          </div>
    );
  }
}