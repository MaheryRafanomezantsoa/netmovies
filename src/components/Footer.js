import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit'
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld/'
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown'
import { generateMedia } from 'styled-media-query'

class Footer extends Component {
    state = {
        langContent: false
    }
    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }
    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft:'15%', fontSize:'1.125rem' }}>Questions? <Link>Appelez le +33 3 89 56 54 85</Link></span>
                <div className="footer-columns">
                    <ul>
                        <li><Link>FAQ</Link></li>
                        <li><Link>Partenaires</Link></li>
                        <li><Link>Comment regarder</Link></li>
                        <li><Link>Autres informations</Link></li>
                        <li><Link>NetMovies Original</Link></li>
                    </ul>
                    <ul>
                        <li><Link>Centre d'aide</Link></li>
                        <li><Link>Recrutement</Link></li>
                        <li><Link>Conditions d'utilisation</Link></li>
                        <li><Link>Nous contacter</Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link>Compte</Link></li>
                        <li><Link>Offir Carte cadeaux</Link></li>
                        <li><Link>Privée</Link></li>
                        <li><Link>Test rapide</Link></li>
                        
                    </ul>
                    <ul>
                        <li><Link>Media center</Link></li>
                        <li><Link>Acheter Carte cadeaux</Link></li>
                        <li><Link>Préférence des cookies</Link></li>
                        <li><Link>Informations légales</Link></li>
                        
                    </ul>
                    {/* Langage button */}
                    <div className="lang-btn"onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20}/>
                       &nbsp;&nbsp;Anglais&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                    </div>
                </div>
                {/*Toggle Language content */}
                {this.state.langContent && (
                <div className="lang-toggle">
                    <ul>
                        <li>Anglais</li>
                    </ul>
                    <ul>
                        <li>Français</li>
                    </ul>
                </div>
                )}
            </FooterContainer>
        )
    }
}
export default Footer;


//Media
const customMedia = generateMedia({
   tablet: '740px'
})

const FooterContainer = styled.footer`
background: var(--mainDeepDark);
padding-top: 10rem;
padding-bottom: 3rem;
color: #999;

.footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan('tablet')`
    grid-template-columns: repeat(2, 1fr);
    `}
}
ul li {
    list-style: none;
    line-height: 2.5rem;
}
a {
    color: #999;
}
a:hover {
    text-decoration: underline;
    cursor: pointer;
}
// langage button
.lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8.125rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin:2rem 0 0;
    cursor: pointer;
   
}
// toggle language content
.lang-toggle {
    margin-left:15%;
    position: absolute;
    margin-top: -0.9rem;
    
}
.lang-toggle ul {
    background: var(--mainDeepDark);
    width: 8.125rem;
    border: 1px solid #333;
    &:hover {
        background: #fff;
        li{
        color: var(--mainRed)
        }    
    }
    margin-bottom: -0.9rem;
    
}
`