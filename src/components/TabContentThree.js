import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import { Icon } from 'react-icons-kit'
import {cross} from 'react-icons-kit/icomoon/cross'
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import { generateMedia } from 'styled-media-query'
function TabContentThree() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{ fontSize: '1.5rem'}}>Choisissez un program et regardez tout sur NetMovies</span>
                    <Button className="btn">Essayer</Button>
                </div>
                {/* Tab bottom content */}
                <div className="tab-bottom-content">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Basic</th>
                                <th>Standard</th>
                                <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Prix mensuel</td>
                                <td>9,99€</td>
                                <td>13,99€</td>
                                <td>16.99€</td>
                            </tr>
                            <tr>
                                <td>HD</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Ultra HD</td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={cross} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Nombre d'appareils connectés</td>
                                <td>1</td>
                                <td>2</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Regardez sur votre tablette, smartphone et TV</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Nombre de films et séries illimité</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                            <tr>
                                <td>Annulez quand vous le souhaitez</td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                                <td><Icon icon={checkmark} size={10}/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </TabContainer>
    )
}
export default TabContentThree

//Media
const customMedia = generateMedia({
    lgDesktop: '1350px',
    mdDesktop: '1000px'
})

const TabContainer = styled.div`
background: var(--mainDeepDark);

.tab-content {
    margin: 0 15%;
    padding-bottom: 1%;
}
.tab-top-content{
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-item: center;
    padding: 3rem 0 0;
    ${customMedia.lessThan('lgDesktop')`
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    text-align: center;
    `}
}

span{
    grid-column: 3 / 9;
    ${customMedia.lessThan('lgDesktop')`
    grid-column: 1 / -1;
    `}
}
.btn {
    grid-column: 9 / 12;
    margin-left: 3rem;
    margin-right: 5.1rem;
    ${customMedia.lessThan('mdDesktop')`
    grid-column: 1 / -1;
    margin-left: 30%;
    margin-right: 30%;
    `}
}

// Tab Bottom content
.tab-bottom-content {
    margin: 2rem auto;
}

//table

table {
    width: 100%;
    margin-top:2rem;
    border-collapse: collapse;
}
table thead th {
    text-transform: uppercase;
    padding: 0.8rem;
}

table tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
table tbody tr td {
    color: #999;
    padding: 0.8rem 1.2rem;
    text-align: center;
}
table tbody tr td:first-child {
    text-align: left;
}
table tbody tr:nth-child(even) {
    background: #222;
}
`