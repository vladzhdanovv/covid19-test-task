import React, {useCallback, useEffect} from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

const Sidebar = () => {
    return (
        <aside style={{minHeight: `calc(100vh - 50px)`, borderRight: '1px solid black'}}>
            <Nav className="flex-column">
                <Nav.Item>
                    <Link to={'/1'}>One</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={'/2'}>Two</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={'/3'}>Three</Link>
                </Nav.Item>
                <Nav.Item>
                    <Link to={'/4'}>Four</Link>
                </Nav.Item>
            </Nav>
        </aside>
    )
}

export default Sidebar;
