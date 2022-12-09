import React, {useEffect, useState} from 'react';
import {addClientInfo, editClientInfo, getClientsInfo} from "../api/rest/clients";
import {MyTable} from "../components/MyTable";
import {Button} from "react-bootstrap";
import {MyModal} from "../components/MyModal";

export const Clients = () => {
    const [clients, setClients] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [editModal, setEditModal] = useState(0);

    useEffect(() => {
        getClientsInfo().then(response => {
            setClients(response.data)
        })
    }, [])

    const createClient = (client) => {
        addClientInfo(client).finally(() => {
            setModalShow(false);
            getClientsInfo().then(response => {
                setClients(response.data)
            })
        })
    }

    const editClient = (client) => {
        editClientInfo(client).finally(() => {
            setModalShow(false);
            getClientsInfo().then(response => {
                setClients(response.data)
            })
        }).finally(() => setEditModal(0))
    }

    const onEdit = (id) => {
        setEditModal(id);
        setModalShow(true)
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
            <MyTable data={clients} headers={["ID", "Фамилия", "Имя", "Отчество", "Адрес", "Телефон"]} onEdit={onEdit}/>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} header={"Добавить клиента"}
                     formHeaders={[["Фамилия", "surname"], ["Имя", "name"], ["Отчество", "patronymic"], ["Адрес", "address"], ["Телефон", "phone"]]}
                     create={createClient} editModal={editModal} edit={editClient}/>
        </div>
    );
};

