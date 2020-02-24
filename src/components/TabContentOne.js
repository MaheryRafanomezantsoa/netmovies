import React from 'react'
import Img from '../images/tab-1-pic.png';
import styled from 'styled-components';
import { Button } from './Button'
import { generateMedia } from 'styled-media-query'
 function TabContentOne() {
    return (
        <TabContentContainer className="container">
            <div className="tab-content">
                <div>
                <span className="title" style={{marginBottom:'2rem'}}>
                    Si vous pensez que NetMovies n'est pas fait pour vous, pas de problème! Vous pouvez annuler à tout moment 
                </span>
                <br />
                <Button style={{marginTop: '2rem'}}>Essayer maintenant</Button>
                </div>
                <img src={Img}/>
            </div>
        </TabContentContainer>
    )
}
export default TabContentOne;

// Media Query
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '960px',

})
// Main Content container

const TabContentContainer = styled.div`
    background: var(--mainDeepDark);
    .container{
        margin: 0 10%;
    }
    img{
        width: 31.875rem;
        ${customMedia.lessThan('tablet')`
        width: 20rem;
        margin: 0 auto;
    `}
    }
    .title {
        margin-top: 2rem;
        ${customMedia.lessThan('smDesktop')`
            font-size: 1.5rem;
            line-height: 1rem;
        `}
    }
    .tab-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 2rem;
        align-items: center;
        font-size: 2rem;
        padding:2.5rem;
        ${customMedia.lessThan('tablet')`
        grid-template-columns: 100%;
        text-align: center;
        padding-left: 0;
        padding-right:0;
    `}
    }

`