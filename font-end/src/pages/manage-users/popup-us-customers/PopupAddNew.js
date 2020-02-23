import React from 'react';
import { Button, Form, FormGroup, Label, Input, ModalFooter, Row, Col} from 'reactstrap';

class ContentAddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log('User submited !!!')
  }

  render() {
    
    return (
      <div className='p-3'>
        <Form>
          <FormGroup className='mt-1'>
            <h1>Info</h1>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col>
                <Label for="userName">User name</Label>
                <Input type="text" name="userName" id="userName" placeholder="Type user name" 
                  value={this.state.data.userName}
                  onChange={this.handleChange}
                  
                />
              </Col>
              <Col>
                <Label for="email">Email</Label>
                <Input type="email" name="email" id="email" placeholder="Type email" 
                  value={this.state.data.email}
                  onChange={this.handleChange}
                  
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
                  
                />
              </Col>
              <Col>
                <Label for="organization">Organization/ Company</Label>
                <Input type="text" name="organization" id="organization" placeholder="Type current ognization or company" 
                  value={this.state.data.organization}
                  onChange={this.handleChange}
                  
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
                  
                />
              </Col>
              <Col>
                <Label for="subjects">Subjects</Label>
                <Input type="text" name="subjects" id="subjects" placeholder="Type list of subjects" 
                  value={this.state.data.subjects}
                  onChange={this.handleChange}
                  
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
                  
                />
              </Col>
              <Col>
                <Label for="sex">Sex</Label>
                <Input type="select" name="sex" id="sex" value={this.state.data.sex} onChange={this.handleChange} >
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
                <Input type="select" name="plan" id="plan" value={this.state.data.plan} onChange={this.handleChange} >
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
                  
                />
              </Col>
              <Col>
                <Label for="province">Province</Label>
                <Input type="text" name="province" id="province" placeholder="Type class" 
                  value={this.state.data.province}
                  onChange={this.handleChange}
                  
                />
              </Col>
              <Col>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city" placeholder="Type class" 
                  value={this.state.data.city}
                  onChange={this.handleChange}
                  
                />
              </Col>
              <Col>
                <Label for="district">District</Label>
                <Input type="text" name="district" id="district" placeholder="Type class" 
                  value={this.state.data.district}
                  onChange={this.handleChange}
                  
                />
              </Col>
              <Col>
                <Label for="wards">Wards</Label>
                <Input type="text" name="wards" id="wards" placeholder="Type class" 
                  value={this.state.data.wards}
                  onChange={this.handleChange}
                  
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
                      <Input type="checkbox" defaultChecked={this.state.data.active} onChange={this.handleChange} />{' '}
                        Active
                    </Label>
              </FormGroup>
              </Col>
              <Col>
                <Label for="newPassword">Add new password</Label>
                <Input type="password" name="password" id="newPassword" placeholder="Type new password" 
                  value={this.state.data.password}
                  onChange={this.handleChange}
                  
                />
              </Col>
            </Row>
          </FormGroup>
          <ModalFooter>
            <Button color='primary' onClick={this.handleSubmit}>Save</Button>
            <Button color='secondary' onClick={this.props.close}>Cancel</Button>
          </ModalFooter>
        </Form>
      </div>
    );
  }
}

export default ContentAddNew;