import React from 'react';
import {Button, Table} from "react-bootstrap";
import {useAuth} from "../auth/useAuth";

export const MyTable = ({
                            data,
                            headers,
                            onEdit,
                            isDelete,
                            onDelete = null,
                            isChangeRole,
                            onChangeRole = null,
                            isShowFullInfo,
                            onShowFullInfo = null
                        }) => {

    const {roles} = useAuth();

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
                                {
                                    Object.keys(client).map(el => {
                                        if (Array.isArray(client[el])) {
                                            return client[el].length === 2 ? <td>Менеджер</td> : <td>Сотрудник</td>
                                        }
                                        if (typeof client[el] === 'object') {
                                            return <td>{client[el]?.id}</td>
                                        }
                                        return <td>{client[el]}</td>

                                    })
                                }

                                <td>
                                    {isShowFullInfo &&
                                        <Button variant="primary" onClick={() => onShowFullInfo(client?.id, client?.client.id, client?.route.id)} size="sm"
                                                style={{marginRight: "10px"}}>
                                            Подробнее
                                        </Button>
                                    }
                                    {
                                        headers[1] !== "Фамилия" ?
                                                roles.length > 1 &&
                                            <Button variant="primary" onClick={() => onEdit(client.id)} size="sm">
                                                Редактировать
                                            </Button>
                                            :
                                            <Button variant="primary" onClick={() => onEdit(client.id)} size="sm">
                                                Редактировать
                                            </Button>
                                    }

                                    {isChangeRole &&
                                        <Button variant="primary"
                                                onClick={() => onChangeRole(client.id, client.roles.length - 1)}
                                                size="sm"
                                                style={{marginLeft: "10px"}}>
                                            {client.roles.length === 2 ? "Сделать сотрудником" : "Сделать менеджером"}
                                        </Button>
                                    }
                                    {isDelete && roles.length > 1 &&
                                        <Button variant="danger" onClick={() => onDelete(client.id)} size="sm"
                                                style={{marginLeft: "10px"}}>
                                            Удалить
                                        </Button>
                                    }
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
