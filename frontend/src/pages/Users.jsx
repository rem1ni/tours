import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {MyTable} from "../components/MyTable";
import {MyModal} from "../components/MyModal";
import {addUserInfo, changeUserRole, deleteUserInfo, editUserInfo, getUsersInfo} from "../api/rest/users";

export const Users = () => {
    const [clients, setClients] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [editModal, setEditModal] = useState(0);

    useEffect(() => {
        getUsersInfo().then(response => {
            console.log(response.data)
            setClients(response.data)
        })
    }, [])

    const createClient = (client) => {
        addUserInfo(client).finally(() => {
            setModalShow(false);
            getUsersInfo().then(response => {
                setClients(response.data)
            })
        })
    }

    const editClient = (client) => {
        editUserInfo(client).finally(() => {
            setModalShow(false);
            getUsersInfo().then(response => {
                setClients(response.data)
            })
        }).finally(() => setEditModal(0))
    }

    const onEdit = (id) => {
        setEditModal(id);
        setModalShow(true)
    }

    const onDelete = (id) => {
        deleteUserInfo({id}).then(() => {
            getUsersInfo().then(response => {
                setClients(response.data)
            })
        });
    }

    const onChangeRole = (id, admin) => {
        changeUserRole({id, admin: !admin}).then(() => {
            getUsersInfo().then(response => {
                setClients(response.data)
            })
        })
    }

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center text-center">
                <div className="w-75">
                    <div className="d-flex justify-content-end mb-1">
                        <Button variant="primary" onClick={() => setModalShow(true)} size="m">
                            Добавить
                        </Button>
                    </div>
                </div>
            </div>
            <MyTable data={clients} headers={["ID", "Имя пользователя", "Пароль", "Роль"]} onEdit={onEdit} isDelete onDelete={onDelete} isChangeRole onChangeRole={onChangeRole}/>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} header={"Добавить пользователя"}
                     formHeaders={[["Имя пользователя", "username"], ["Пароль", "password"]]}
                     create={createClient} editModal={editModal} edit={editClient} />
        </div>
    );
};
