import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NAV_LINKS = [];

const Header = () => {
    return (
        <header style={{borderBottom: `1px solid black`}}>
            <Navbar>
                <Navbar.Brand href="#home">
                    Here is logo
                </Navbar.Brand>
                <Nav className='mr-auto'>
                    {
                        NAV_LINKS.map(link => (
                            <Link to={link.to}>
                                {link.name}
                            </Link>
                        ))
                    }
                </Nav>
                <div>
                    UserName
                </div>
            </Navbar>
        </header>
    )
}

export default Header;
