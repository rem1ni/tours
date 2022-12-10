import React, {useState} from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {useAuth} from "../auth/useAuth";

export const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {login} = useAuth();

    const onClickLogin = (event) => {
        event.preventDefault();
        login({username, password});
    }


    return (
        <div className="d-flex justify-content-center" style={{marginTop: "16%"}}>
            <div className="w-25">
                <h1 className="text-center">Туры</h1>
                <Form className="mt-3">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Username
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </Col>
                    </Form.Group>
                    <div className="d-flex justify-content-center">
                        <Button onClick={onClickLogin} className="text-center w-50" variant="success" >Войти</Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};
