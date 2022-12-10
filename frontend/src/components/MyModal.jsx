import React from 'react';
import {Button, FloatingLabel, Form, Modal} from "react-bootstrap";

export const MyModal = ({header, formHeaders, create, editModal, edit, isSelect, selectClients, routes, ...props}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {};
        for (let i = 0; i < formHeaders.length + (isSelect ? 2 : 0); i++) {
            if (event.target[i].placeholder)
                data[event.target[i].placeholder] = event.target[i].value;
        }
        if (isSelect) {
            data['idclient'] = event.target[0].value;
            data['idroute'] = event.target[1].value;
        }
        if (editModal === 0) {
            create(data)
        } else {
            data["id"] = editModal
            edit(data)
        }
        console.log("EDIT", data)
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
                            isSelect && (
                                <>
                                    <Form.Select aria-label="Default select example" className="mb-3" about="client">
                                        <option>Выбрать Клиента</option>
                                        {
                                            selectClients.map(el =>
                                                <option value={el?.id}>{`${el?.id} ${el?.surname} ${el?.name} ${el?.phone}`}</option>
                                            )

                                        }
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" className="mb-3">
                                        <option>Выбрать Маршрут</option>
                                        {
                                            routes.map(el =>
                                                <option value={el?.id}>{`${el?.id} ${el?.country} ${el?.hotel} ${el?.duration} ${el?.cost}`}</option>
                                            )

                                        }
                                    </Form.Select>
                                </>)
                        }
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
