import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {MyTable} from "../components/MyTable";
import {MyModal} from "../components/MyModal";
import {addUserInfo, changeUserRole, deleteUserInfo, editUserInfo, getUsersInfo} from "../api/rest/users";
import {getTripsInfo} from "../api/rest/trips";

export const Trips = () => {
    const [clients, setClients] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [editModal, setEditModal] = useState(0);

    useEffect(() => {
        getTripsInfo().then(response => {
            console.log(response.data)
            setClients(response.data)
        })
    }, [])

    const createClient = (client) => {
        addUserInfo(client).finally(() => {
            setModalShow(false);
            getTripsInfo().then(response => {
                setClients(response.data)
            })
        })
    }

    const editClient = (client) => {
        editUserInfo(client).finally(() => {
            setModalShow(false);
            getTripsInfo().then(response => {
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
            getTripsInfo().then(response => {
                setClients(response.data)
            })
        });
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
            <MyTable data={clients} headers={["ID","Маршрут", "Клиент", "Дата отправления", "Количество", "Скидка"]} onEdit={onEdit} isDelete onDelete={onDelete}/>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} header={"Добавить пользователя"}
                     formHeaders={[["Имя пользователя", "username"], ["Пароль", "password"]]}
                     create={createClient} editModal={editModal} edit={editClient} />
        </div>
    );
};
