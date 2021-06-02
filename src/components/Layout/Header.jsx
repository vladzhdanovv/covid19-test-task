import React from 'react';
import {Nav, Navbar, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import UserMenu from "../UserMenu";
import logo from '../../assets/images/logo.svg';

const NAV_LINKS = [];

const Brand = () => {
    return (
        <Navbar>
            <Navbar.Brand>
                <Link to={'/'}>
                    <img src={logo} alt="Data Medics" style={{width: '100%'}}/>
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}
const Header = () => {
    return (
        <header style={{borderBottom: `1px solid black`}}>
            <Row>
                <Col xs={2}>
                    <Brand />
                </Col>
                <Col xs={10}>
                    <Navbar>
                        <Nav className='mr-auto'>
                            {
                                NAV_LINKS.map(link => (
                                    <Link to={link.to}>
                                        {link.name}
                                    </Link>
                                ))
                            }
                        </Nav>
                        <UserMenu />
                    </Navbar>
                </Col>
            </Row>
        </header>
    )
}

export default Header;
