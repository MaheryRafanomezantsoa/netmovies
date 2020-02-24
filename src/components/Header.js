import React, { Component } from 'react'
import logo from '../svg/logo.png';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { Button } from './Button'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
//Media query
import { generateMedia } from "styled-media-query";

class Header extends Component {
    render() {
        return (
            <HeaderContainer className="header-container">
                <div className="header-top">
                    <Logo src={logo} alt="logo" />
                    <NavLink to="/login" className="signIn-btn">Sign in</NavLink>
                </div>
                {/* Header Content*/}
                <div className="header-content">
                    <Title>N'attendez plus</Title>
                    <SubTitle>Regardez partout, Annulez quand vous voulez</SubTitle>
                    <Button className="main-offer-btn" primary>
                        Essayer
                        <Icon className="Icon"icon={ic_keyboard_arrow_right} size= {37}/>   
                    </Button>
                </div>
            </HeaderContainer>
        )
    }
}
export default Header;
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1150px',
    tablet: '960px',
    smTablet: '740px',
})

// Logo

const Logo = styled.img`
    width: 20rem;
    
    position: relative;
    top: -6.5rem;
    left: 40%;
    transform: translate (-50%, -50%);
    margin-left: 0;
    ${customMedia.lessThan('tablet')`
        left: 5%;
        
    `}
`;


// Header Container
const HeaderContainer = styled.div`
.signIn-btn {
    right:0;
    margin:1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    background: var(--mainRed);
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in;
    &:hover {
        background: #fff;
        color: var(--mainRedHover);
    }
    ${customMedia.lessThan('smTablet')`
        margin-top: 1.25rem;
        right: 5%
    `}
}
//Header Top
.header-top{
    position: relative;
    height: 10rem;
    z-index: 1;
}
// Header Content
.header-content {
    width: 65%;
    position: relative;
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    
    z-index: 1;
    ${customMedia.lessThan('smTablet')`
    display: grid;
    grid-template-columns: repeat(3, 60px)
    margin-top: 8rem;
`}
}


.Icon svg{
    vertical-align: bottom;
    margin-left: 1.5rem;
    ${customMedia.lessThan('smTablet')`
    display: none !important;
`}
}
.main-offer-btn{
    ${customMedia.lessThan('lgDesktop')`
        margin: 0 33%;
        font-size:1.5rem;
    `}
    ${customMedia.lessThan('mdDesktop')`
        margin: 0 25%;
        font-size:1.5rem;
    `}
    ${customMedia.lessThan('tablet')`
        margin: 0 20%;
        font-size:1.3rem;
    `}
}
`;
const Title = styled.h1`
    margin: 0 0 1.2rem;
    font-size: 5rem;
    font-weight: 700;
    line-height: 4rem;
    text-align: center;
    ${customMedia.lessThan('tablet')`
    line-height: 3rem;
    font-size: 2.8rem;
    
`}

`
//Subtitle
const SubTitle = styled.h2`
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 1.25rem;
    margin: 2rem 0 1.875rem;
    text-transform: uppercase;
    
    ${customMedia.lessThan('smTablet')`
    font-size: 1.4rem;
    margin: 0 0 2rem 0;
`}
`