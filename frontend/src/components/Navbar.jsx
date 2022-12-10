import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import {useAuth} from "../auth/useAuth";

export const MyNavbar = () => {
    const {user, roles, logout} = useAuth();


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
                        {roles.length > 1 &&
                        <LinkContainer to="/users">
                            <Nav.Link>Пользователи</Nav.Link>
                        </LinkContainer>
                        }
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Вошли в систему как: <span className="text-white">{user?.username}</span>
                        </Navbar.Text>
                        <Button className="m-2" variant="danger" onClick={logout}>Выход</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    );
};
