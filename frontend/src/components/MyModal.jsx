import React from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";

export const MyModal = ({header, formHeaders, create, editModal, edit, ...props}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {};
        for (let i = 0; i < formHeaders.length; i++) {
            data[event.target[i].placeholder] = event.target[i].value;
        }
        console.log(data)
        if (editModal === 0) {
            create(data)
        } else {
            data["id"] = editModal
            edit(data)
        }

    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {header}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        {
                            formHeaders.map(el =>
                                <FloatingLabel label={el[0]} className="mb-3">
                                    <Form.Control placeholder={el[1]} autoFocus/>
                                </FloatingLabel>
                            )
                        }
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Сохранить
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};
