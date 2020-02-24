import React from 'react'
import  { Button } from './Button'
import styled from 'styled-components'
import ImgTv from '../images/tab-tv.png'
import ImgTablet from '../images/tab-tablet.png'
import ImgMacbook from '../images/tab-macbook.png'
import { generateMedia } from 'styled-media-query'
function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>
                        Regardez vos films et séries préférés ou vous voulez et quand vous voulez
                    </span>
                    <Button className="btn">Essayer</Button>
                </div>

                {/*Tab Button Content */}
                <div className="tab-bottom-content">
                   
                    <div>
                        <img src={ImgTv}  style={{width:'18.75rem'}} alt=""/>
                        <h3>Regardez sur votre tv</h3>
                        <p>Smart Tv, PLayStation, Xbox, ChromeCast, <br/>Apple TV, Blu-ray players et ++</p>
                    </div>
                    <div>
                        <img src={ImgTablet} style={{width:'18.75rem', paddingTop:'0.625rem'}} alt=""/>
                        <h3>Regardez sur votre tablette</h3>
                        <p>Smart Tv, PLayStation, Xbox, ChromeCast, <br/>Apple TV, Blu-ray players et ++</p>
                    </div>
                    <div>
                        <img src={ImgMacbook} style={{width:'18.75rem', paddingTop: '0.625rem', paddingBottom:'0.625rem'}} alt=""/>
                        <h3>Regardez sur votre pc</h3>
                        <p>Smart Tv, PLayStation, Xbox, ChromeCast, <br/>Apple TV, Blu-ray players et ++</p>
                    </div>
                </div>
            </div>
        </TabContainer>
    )
}
export default TabContentTwo;


//Media
const customMedia = generateMedia({
    smDesktop: '1440px',
    tablet: '900px'
})
// Main Tab content container

const TabContainer = styled.div`
    background: var(--mainDeepDark);
    .tab-content {
        margin: 0 15%;
    }
    //tab top content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-item: center;
        padding: 2.5rem 0;
        ${customMedia.lessThan('smDesktop')`
            grid-template-columns: repeat(2, 1fr);
        `}
        ${customMedia.lessThan('tablet')`
            grid-template-columns: 1fr;
            text-align: center;
            row-gap: 1.5rem;
        `}
    }
    span{
        grid-column: 1 / 8;
        ${customMedia.lessThan('tablet')`
        grid-column: 1 / -1;
        font-size: 1.5rem;
    `}
    }
    .btn {
        margin: 0 1.25rem 1.25rem;
        grid-column:10 / 12;
        ${customMedia.lessThan('tablet')`
        grid-column: 1 / -1;
        margin-left: 30%;
        margin-right: 30%;
    `}
    }
    //Tab bottom content
    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid gap: 2rem;
        text-align: center;
        margin-top:2rem;
       
        ${customMedia.lessThan('tablet')`
        grid-template-columns: 1fr;
        img {
            width:100%;
        }
        `
    }
    
    
    h3{
        margin: 0.5rem 0;
    }
    p{
        color: var(--mainGrey);
    }

`