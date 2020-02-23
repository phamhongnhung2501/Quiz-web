import React from 'react';
import {Redirect} from "react-router-dom";
import {withCookies, Cookies} from 'react-cookie';
import {instanceOf} from "prop-types";

class Logout extends React.Component{
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    render() {
        const {cookies} = this.props;
        cookies.remove('token')
        return (
            <Redirect to='/auth/sign-in'/>
        );
    }
}

export default withCookies(Logout);
