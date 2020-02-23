import React from 'react';
import GoogleLogin from 'react-google-login';
import { Button } from 'reactstrap';
import google from '../../assets/img/logo/google-logo.png';

class ButtonGoogleLogin extends React.Component {
    render() {
        const responseGoogle = response => {
            console.log(response);
        };
        return (
            <GoogleLogin
                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn btn-danger btn-block" size="lg">
                        <img src={google} width={24} className="align-middle float-left"></img>
                        {this.props.data}
                    </Button>
                )}
            />
        );
    }
}

export default ButtonGoogleLogin;
