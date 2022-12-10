import React from 'react';
import {Button, FloatingLabel, Form, Modal, Table} from "react-bootstrap";

export const MyModelTripInfo = ({data, ...props}) => {
    console.log(data?.routes)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {`Путевка №${data?.id}`}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>Клиент</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        {
                            ["ID", "Фамилия", "Имя", "Отчество", "Адрес", "Телефон"]
                                .map(el => <th>{el}</th>)
                        }
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {
                            data?.client && Object.keys(data?.client[0]).map((el) =>
                                <td>{data?.client[0][el]}</td>
                            )
                        }
                    </tr>
                    </tbody>
                </Table>
                <h3>Маршрут</h3>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        {
                            ["ID", "Страна", "Климат", "Длительность", "Отель", "Стоимость"]
                                .map(el => <th>{el}</th>)
                        }
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {
                            data?.routes[0] && Object.keys(data?.routes[0]).map((el) =>
                                <td>{data?.routes[0][el]}</td>
                            )
                        }
                    </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
};
