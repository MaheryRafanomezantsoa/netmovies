import React, { Component } from 'react'
import logo from '../svg/logo.png'
import styled from 'styled-components'
import LoginForm from '../components/login/LoginForm'
 class Login extends Component {
    render() {
        return (
            <div className="main-login-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" className="logo" />
                </div>
                <LoginForm />
            </div>
        );
    }
}
export default Login;

// Logo

const Logo = styled.img`
    width: 20rem;
    position: absolute;
    top: 25%;
    left:11%;
    transform: translate(-50%, -50%);
    margin-left: 0;

`
