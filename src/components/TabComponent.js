import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import TabDoor from './tabs_nav/TabDoor'
import TabDevices from './tabs_nav/TabDevices';
import TabPrices from './tabs_nav/TabPrices';
import TabContentOne from './TabContentOne';
import TabContentTwo from './TabContentTwo';
import TabContentThree from './TabContentThree';

import '../css/TabsNav.css'
 class TabComponent extends Component {
     state = {
         tabIndex: 0
     }
    render() {
        return (
            <div>
                <Tabs className="tabs" selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList className="tab-nav-container">
                        <Tab className={`${this.state.tabIndex === 0 ? 'tab-selected active' : null}`}>
                            <TabDoor />
                                <p className="lgScreen" style={{marginBottom: '1.875rem'}}>
                                    <strong>Sans engagement<br/>Annulez quand vous le voulez</strong>
                                </p>
                                <span className="mdScreen" style={{marginTop:'0.4rem'}}>Annuler</span>
                        </Tab>
                        <Tab className={`${this.state.tabIndex === 1 ? 'tab-selected active' : null}`}>
                            <TabDevices />
                            <p className="lgScreen" style={{marginTop:'-5.3125rem'}}>
                                <strong>Regardez partout ou vous etes.</strong>
                            </p>
                            <br/>
                            <span className="mdScreen"style={{marginTop:'-5.3125rem'}}>Devices</span>
                        </Tab>
                        <Tab style={{marginTop:'-0.21250rem'}} className={`${this.state.tabIndex === 2 ? 'tab-selected active' : null}`}>
                            <TabPrices />
                            <p className="lgScreen"><strong>Choisissez votre abonnement</strong></p><br/>
                            <span className="mdScreen">Prices</span>
                        </Tab>
                    </TabList>
                    {/* Tabs content */}
                    <TabPanel>
                        <TabContentOne />
                    </TabPanel>
                    <TabPanel>
                        <TabContentTwo />
                    </TabPanel>
                    <TabPanel>
                        <TabContentThree />
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}
export default TabComponent;

