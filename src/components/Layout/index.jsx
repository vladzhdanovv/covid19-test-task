import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Layout = ({routes: Routes, ...props}) => {
    return (
        <Container fluid style={{padding: 0}}>
            <Header />
            <Row >
                <Col xs={2}>
                    <Sidebar />
                </Col>
                <Col xs={10}>
                    <Content>
                        <Routes />
                    </Content>
                </Col>
            </Row>
        </Container>
    )
}

export default Layout;
