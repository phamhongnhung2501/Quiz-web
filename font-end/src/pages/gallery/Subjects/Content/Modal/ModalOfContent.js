import React, { Component } from 'react';
import {Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Content2 from './Content2';
// import ModalReport2 from './ModalReport2';

class ModalOfContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenReport: false,
      photoIndex: 0,
      photo: {}
    };
  }

  handleToggleAddImageModal() {
    this.props.handleToggleModal(0);
  }

  handleToggleReportModal() {
    this.setState({
      isOpenReport: !this.state.isOpenReport
    })
  }

  handleSaveImage() {
    const { imageIndex } = this.props;
    this.props.handleRemoveImageFromPageOfItems(imageIndex)
  }

  render (){
    const { isOpen, image, imageIndex, pageNumber, totalImages, totalPages, data } = this.props;
    const { isOpenReport } = this.state;
    return (
      <React.Fragment>
        <Modal isOpen={isOpen} size="xl" centered scrollable contentClassName="modal-fix">
          <ModalHeader toggle={this.handleToggleAddImageModal.bind(this)}>
            <b><h1>Edit image to gallery</h1></b>
          </ModalHeader>
          <ModalBody>
            <Content2 
              className="img-fluid" 
              image={image}
              imageIndex={imageIndex}
              pageNumber={pageNumber}
              totalImages={totalImages}
              totalPages={totalPages}
              handleChangePageNumber={this.props.handleChangePageNumber}
              handleChangeImage={this.props.handleChangeImage}
            />
          </ModalBody>
          <ModalFooter>
            <Button size={'lg'} color="primary" onClick={this.handleSaveImage.bind(this)}>Save</Button>
            <Button size={'lg'} color="secondary" onClick={this.handleToggleAddImageModal.bind(this)}>Cancel</Button>
            {/* <ModalReport2/> */}
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

export default ModalOfContent;