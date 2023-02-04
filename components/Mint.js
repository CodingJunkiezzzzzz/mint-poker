import React from 'react';
import { Accordion, Item, Form, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Mint() {
    return (
        <>
            <div className="main">


                <div className="nav-bar">
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand href="#home">Poker Protocol</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <div className="links-div">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Mint</Nav.Link>
                                    </div>
                                    <div className="header-connect"><button>Connect Wallet</button></div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div className="radio-card">
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                                <Form.Check
                                    inline
                                    label="General"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />

                                <Form.Check
                                    inline
                                    label="Premium"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />

                            </div>
                        ))}
                    </Form>
                </div>

                <div className="card-main">


                    <div className="info-group">
                        <div className="sub-info">
                            <div className="info">Price</div>
                            <div className="xinfo">0.00 <span>ETH</span></div>
                        </div>

                        <div className="sub-info">
                            <div className="info">Supply</div>
                            <div>7000</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">Mint date</div>
                            <div>7th of February</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">Mint Structure</div>
                            <div>Lorem ipsum ...</div>
                        </div>

                        <div className="sub-info">
                            <div className="info">Mint utility</div>
                            <div>Lorem ipsum ...</div>
                        </div>
                    </div>
                </div>

                <div className="title">FAQs</div>
                <div className="accordion-div">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is Stack</Accordion.Header>
                            <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>

                </div>

            </div>

        </>

    )
}