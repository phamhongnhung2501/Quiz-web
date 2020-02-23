import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { Button } from 'reactstrap';
import { Facebook } from 'react-feather';

class ButtonFacebookLogin extends React.Component {
    render() {
        const responseFacebook = response => {
            console.log(response);
        };
        return (
            <FacebookLogin
                appId="1390795401009840" //APP ID NOT CREATED YET
                callback={responseFacebook}
                render={renderProps => (
                    <Button onClick={renderProps.onClick} className="btn btn-info btn-block" size="lg">
                        <Facebook size={24} className="align-middle float-left" />
                        {this.props.data}
                    </Button>
                )}
            />
        );
    }
}

export default ButtonFacebookLogin;
