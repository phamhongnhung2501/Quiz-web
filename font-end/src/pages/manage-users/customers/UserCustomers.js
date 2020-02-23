import React, { Component, useState } from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import EmbededForm from './TableListUsers';
import ContentModal from '../popup-us-customers/PopupAddNew';



import {
  Row,
  Col,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Modal,
  ModalHeader, 
  ModalBody
} from 'reactstrap';

const DropdownAction = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className="m-2">
      <DropdownToggle caret>
        Action
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Import</DropdownItem>
        <DropdownItem>Export</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

class UserCustomers extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      modal: {
        isOpen: false
      }
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset > 220) {
      this.setState({
        styleButton: 'btn-fix-top',
        styleContentBtn: 'btn-fix-top-content',
        titleStatus: true
      });
    }
    else {
      this.setState({
        styleButton: '',
        styleContentBtn: '',
        titleStatus: false
      });
    }
  }

  closeModal = () => {
    this.setState({
      modal: {
        isOpen: false
      }
    })
  }

  handleAddNew = () => {
    this.setState({
      modal: {
        isOpen: true
      }
    })
    console.log('hahaha')
  }

  render() {
    return (
      <div onScroll={this.handleScroll}>
        <div className={this.state.styleButton} style={{ width: '100%' }}>
          <Row>
            <Col>
              <h1 className='ml-6'><cite hidden={this.state.titleStatus} style={{textShadow: '2px 2px 8px #FF0000'}} title="Source Title">Customers</cite></h1>
            </Col>
            <Col xs="3">
              <Row className={this.state.styleContentBtn} style={{ borderRadius: '10px' }}>
                <Col className="d-flex justify-content-end">
                  <DropdownAction />
                </Col>
                <Col>
                  <Button className="m-2" color="success" onClick={this.handleAddNew}>
                    <FontAwesomeIcon
                      style={{ fontSize: "14px" }}
                      icon={faPlus}
                    /> Add new</Button>{' '}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <EmbededForm style={{ overflow: 'scroll' }} />
        <Modal scrollable isOpen={this.state.modal.isOpen}>
          <ModalHeader toggle={this.closeModal}>
            Create new user
          </ModalHeader>
          <ModalBody>
            <ContentModal
              close={this.closeModal.bind(this)}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default withCookies(UserCustomers);