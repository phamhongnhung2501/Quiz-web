import React from "react";
import { Link, withRouter, Redirect } from 'react-router-dom';
import { withTranslation} from 'react-i18next';
import { config_api } from '../../config/config'
import { instanceOf } from 'prop-types';
import  {withCookies, Cookies } from 'react-cookie';
import { Button, Card, CardBody, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

import logo from '../../assets/img/logo/login.png'

class SignIn extends React.Component{
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  constructor(props){
    super(props);
    this.state = {
      error: null,
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {cookies} = this.props;
    fetch(config_api.login, {
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "password": this.state.password,
        "type": "normal",
        "username": this.state.email
      })
    })
        .then(res => res.json())
        .then(
            (result) => {
              if(result.success === true){
                cookies.set('token', result.token);
                this.props.history.push("/dashboard/default");
              }
            },
            (error) => {
              console.log(error)
            }
        );
  }

  render() {
    const { t, cookies } = this.props;
    if (cookies.get('token')) 
      return (<Redirect to="/dashboard/default"/>)
    return (
        <React.Fragment>
          <div className="text-center mt-4">
            <h2>{t('SIGNIN_ADMIN_PAGE')}</h2>
          </div>

          <Card>
            <CardBody>
              <div className="m-sm-4">
                <div className="text-center">
                  <img
                      src={logo}
                      alt="Chris Wood"
                      className="img-fluid rounded-circle"
                      width="132"
                      height="132"
                  />
                </div>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>{t('PLACEHOLDER_EMAIL')}</Label>
                    <Input
                        bsSize="lg"
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder={t('PLACEHOLDER_EMAIL')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{t('PLACEHOLDER_PASSWORD')}</Label>
                    <Input
                        bsSize="lg"
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder={t('PLACEHOLDER_PASSWORD')}
                    />
                    <small>
                      <Link to="/auth/reset-password">{t('FORGOT_PASSWORD')}?</Link>
                    </small>
                  </FormGroup>
                  <div>
                    <CustomInput
                        type="checkbox"
                        id="rememberMe"
                        label={t('REMEMBER_USER')}
                        defaultChecked
                    />
                  </div>
                  <div className="text-center mt-3">
                    <Button color="primary" size="lg">
                      {t('BUTTON_SIGNIN')}
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>
        </React.Fragment>
    );
  }
}

export default withRouter(withCookies(withTranslation()(SignIn)));
