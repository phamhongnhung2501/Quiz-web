import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import Content from './Content';
import ModalReport from './ModalReport';
// import './../../Css/modal.css';

class ModalAddImage extends Component {
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
    const { isOpen, image, imageIndex, pageNumber, totalImages, totalPages } = this.props;
    const { isOpenReport } = this.state;
    return (
      <React.Fragment>
        <Modal isOpen={isOpen} size="xl" centered contentClassName="modal-fix">
          <ModalHeader toggle={this.handleToggleAddImageModal.bind(this)}>
            <b><h1>Add image to gallery</h1></b>
          </ModalHeader>
          <ModalBody>
            <Content 
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
            <Button size={'lg'} color="secondary">Ignore</Button>
            <Button 
              size={'lg'} 
              color="primary" 
              onClick={this.handleToggleReportModal.bind(this)}
            >Report</Button>
            <ModalReport 
              isOpenReport={isOpenReport}
              handleToggleReportModal={this.handleToggleReportModal.bind(this)}
            />
          </ModalFooter>
        </Modal>
      </React.Fragment>
    )
  }
}

export default ModalAddImage;