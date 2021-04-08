import React, { useState, Fragment } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Button, Row, Col, Toast, Card, Carousel, Figure, CardGroup } from 'react-bootstrap';


import { Link } from 'react-router-dom';

function LoginInfo(props) {
    const [show, setShow] = useState(false);
    return (
        <div className="adminbg" >
            <Fragment>
                <Navbar bg="light" expand="lg" sticky="top">
                    <Navbar.Brand href="#home" >Retail Banking Center</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />


                        </Form>
                    </Navbar.Collapse>
                </Navbar>



                <Row style={{ marginLeft: '35%' }}>
                    <Col xs={6}>

                        <Link class="btn btn-info mr-2" to='/admin'>AdminLogin</Link><br /><br />
                        <Link class="btn btn-info mr-2" to='/user'>UserLogin</Link>

                    </Col>
                </Row>

            </Fragment>
        </div>
    )
}

export default LoginInfo;