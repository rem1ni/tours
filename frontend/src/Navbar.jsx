import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

export const MyNavbar = () => {
    return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Туры</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/clients">
                            <Nav.Link>Клиенты</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/routes">
                            <Nav.Link>Маршруты</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/trips">
                            <Nav.Link>Путевки</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/users">
                            <Nav.Link>Пользователи</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
    );
};
