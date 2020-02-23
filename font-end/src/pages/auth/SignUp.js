import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import { withTranslation} from 'react-i18next';

import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class SignUp extends React.Component{
  render() {
    const {t} = this.props;
    return (
        <React.Fragment>
          <div className="text-center mt-4">
            <h1 className="h2">{t('GET_STARTED')}</h1>
            {/*<p className="lead">*/}
            {/*  Start creating the best possible user experience for you customers.*/}
            {/*</p>*/}
          </div>

          <Card>
            <CardBody>
              <div className="m-sm-4">
                <Form>
                  <FormGroup>
                    <Label>{t('PLACEHOLDER_EMAIL')}</Label>
                    <Input
                        bsSize="lg"
                        type="email"
                        name="email"
                        placeholder={t('PLACEHOLDER_EMAIL')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{t('PLACEHOLDER_NAME')}</Label>
                    <Input
                        bsSize="lg"
                        type="text"
                        name="name"
                        placeholder={t('PLACEHOLDER_NAME')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{t('PLACEHOLDER_COMPANY')}</Label>
                    <Input
                        bsSize="lg"
                        type="text"
                        name="company"
                        placeholder={t('PLACEHOLDER_COMPANY')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>{t('PLACEHOLDER_PASSWORD')}</Label>
                    <Input
                        bsSize="lg"
                        type="password"
                        name="password"
                        placeholder={t('PLACEHOLDER_PASSWORD')}
                    />
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox"/>{' '}
                      <NavLink to="/auth/sign-up">{t('PATH_TERM')}</NavLink>
                    </Label>
                  </FormGroup>
                  <div className="text-center mt-3">
                    <Link to="/dashboard/default">
                      <Button color="primary" size="lg">
                        {t('BUTTON_SIGNUP')}
                      </Button>
                    </Link>
                  </div>
                </Form>
              </div>
              <div style={{textAlign: "center"}}>
                <NavLink to="/auth/sign-in">{t('ALREADY_ACCOUNT')}</NavLink>
              </div>
            </CardBody>
          </Card>
        </React.Fragment>
    );
  }
}


export default withTranslation()(SignUp);
