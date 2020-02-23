import React from 'react';
import { Button, Form, FormGroup, Label, Input, ModalFooter, Row, Col, ButtonGroup} from 'reactstrap';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class ContentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      editMode: {
        disabled: true,
        status: 'Enable edit'
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    })
  }

  handleChange(event) {
    this.setState({
      data: {
        [event.target.name] : event.target.value
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveUs(this.state.data)
  }

  editMode(){
    console.log(this.state.editMode.disabled)
    if (this.state.editMode.status === 'Enable edit'){
      this.setState({
        editMode: {
          disabled: false,
          status: 'Disable edit'
        }
      })
    }else {
      this.setState({
        editMode: {
          disabled: true,
          status: 'Enable edit'
        }
      })
    }
  }


  render() {
    
    return (
      <div className='p-3'>
        <Form>
          <FormGroup className='mt-1'>
            <Row>
              <Col>
                <h1>Info</h1>
              </Col>
              <Col xs='4'>
                <ButtonGroup style={{float: 'right'}}>
                  <Button outline color='info' onClick={e => this.editMode()}> 
                  <FontAwesomeIcon
                        style={{fontSize: "14px"}}
                        icon={faEdit}
                      /> {this.state.editMode.status}
                  </Button>
                  <Button outline color='danger'>Delete</Button>
                </ButtonGroup>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label for="userName">User name</Label>
                <Input type="text" name="userName" id="userName" placeholder="Type user name" 
                  value={this.state.data.userName}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Type email" 
                  value={this.state.data.email}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label for="fullName">Full name</Label>
                <Input type="text" name="fullName" id="fullName" placeholder="Type full name" 
                  value={this.state.data.fullName}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="organization">Organization/ Company</Label>
                <Input type="text" name="organization" id="organization" placeholder="Type current ognization or company" 
                  value={this.state.data.organization}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label for="class">Class</Label>
                <Input type="text" name="class" id="class" placeholder="Type class" 
                  value={this.state.data.class}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="subjects">Subjects</Label>
                <Input type="text" name="subjects" id="subjects" placeholder="Type list of subjects" 
                  value={this.state.data.subjects}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label for="phoneNumber">Phone number</Label>
                <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="Type class" 
                  value={this.state.data.phoneNumber}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="sex">Sex</Label>
                <Input type="select" name="sex" id="sex" value={this.state.data.sex} onChange={this.handleChange} disabled ={this.state.editMode.disabled}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label for="plan">Plan</Label>
                <Input type="select" name="plan" id="plan" value={this.state.data.plan} onChange={this.handleChange} disabled ={this.state.editMode.disabled}>
                  <option>Basic</option>
                  <option>Premium</option>
                  <option>Company</option>
                  <option>Unlimited</option>
                </Input>
              </Col>
              <Col></Col>
            </Row>
          </FormGroup>
          <h1>Address</h1>
          <FormGroup>
            <Row>
              <Col>
                <Label for="country">Country</Label>
                <Input type="text" name="country" id="country" placeholder="Type class" 
                  value={this.state.data.country}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="province">Province</Label>
                <Input type="text" name="province" id="province" placeholder="Type class" 
                  value={this.state.data.province}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" placeholder="Type class" 
                  value={this.state.data.city}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="district">District</Label>
                <Input type="text" name="district" id="district" placeholder="Type class" 
                  value={this.state.data.district}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
              <Col>
                <Label for="wards">Wards</Label>
                <Input type="text" name="wards" id="wards" placeholder="Type class" 
                  value={this.state.data.wards}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <h1>Permission</h1>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <FormGroup check className='mt-4'>
                    <Label check>
                      <Input type="checkbox" defaultChecked={this.state.data.active} onChange={this.handleChange} disabled ={this.state.editMode.disabled}/>{' '}
                        Active
                    </Label>
              </FormGroup>
              </Col>
              <Col>
                <Label for="newPassword">Add new password</Label>
                <Input type="password" name="password" id="newPassword" placeholder="Type new password" 
                  value={this.state.data.password}
                  onChange={this.handleChange}
                  disabled ={this.state.editMode.disabled}
                />
              </Col>
            </Row>
          </FormGroup>
          <ModalFooter>
            <Button color='primary' onClick={this.handleSubmit} hidden={this.state.editMode.disabled}>Save</Button>
            <Button color='secondary' onClick={this.props.close}>Cancel</Button>
          </ModalFooter>
        </Form>
      </div>
    );
  }
}

export default ContentModal;