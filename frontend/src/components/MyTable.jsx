import React from 'react';
import {Button, Table} from "react-bootstrap";

export const MyTable = ({data, headers, onEdit}) => {
    return (
        <div className="d-flex justify-content-center text-center">
            <div className="w-75">
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        {headers.map(el => <th>{el}</th>)}
                        <th>Управление</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map(client =>
                            <tr>
                                {Object.keys(client).map(el =>
                                    <td>{client[el]}</td>)}
                                <td>
                                    <Button variant="primary" onClick={() => onEdit(client.id)} size="sm">
                                        Редактировать
                                    </Button>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};
