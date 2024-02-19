import React, { Component } from 'react';
import {
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
} from "reactstrap";
import MaryKey from 'views/Products/MaryKey';
import Bags from 'views/Products/Bags';
import Jewels from 'views/Products/Jewels';
import { enumGroup } from 'views/Products/Enum';
import { URL_DescriptionFiles } from 'services/fileService'
import axios from 'axios';

export default class Products extends Component {

    state = {
        activeTab: '1',
    }

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab });
        }
    }
    render() {
        const { activeTab } = this.state
        return (
            <div>
                <Row>
                    <Col md="12">
                        {/* <div className="title">
                                <h3>Navigation Tabs</h3>
                            </div> */}
                        <br />
                        <div className="nav-tabs-navigation">
                            <div className="nav-tabs-wrapper">
                                <Nav id="tabs" role="tablist" tabs>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "1" ? "active" : ""}
                                            onClick={() => {
                                                this.toggle("1");
                                            }}
                                        >
                                            Produtos Mary Kay
                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "2" ? "active" : ""}
                                            onClick={() => {
                                                this.toggle("2");
                                            }}
                                        >
                                            Semi Joiás
                      </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={activeTab === "3" ? "active" : ""}
                                            onClick={() => {
                                                this.toggle("3");
                                            }}
                                        >
                                            Bolsas
                      </NavLink>
                                    </NavItem>
                                </Nav>
                            </div>
                        </div>
                        <TabContent activeTab={activeTab} className="text-center">
                            <TabPane tabId="1">
                                <MaryKey />
                            </TabPane>
                            <TabPane tabId="2">
                                {
                                    this.state.activeTab == enumGroup.jewels ?

                                        <Jewels ListProductsJewels={this.state.ListProductsJewels} />
                                        : null
                                }
                            </TabPane>
                            <TabPane tabId="3">
                                {
                                    this.state.activeTab == enumGroup.bags ?
                                        <Bags />
                                        : null
                                }
                            </TabPane>
                        </TabContent>
                    </Col>
                </Row>
            </div>
        );
    }
}
