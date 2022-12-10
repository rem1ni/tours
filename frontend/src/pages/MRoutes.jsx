import React, {useEffect, useState} from 'react';
import {MyTable} from "../components/MyTable";
import {Button} from "react-bootstrap";
import {MyModal} from "../components/MyModal";
import {addRouteInfo, deleteRouteInfo, editRouteInfo, getRouteInfo} from "../api/rest/routes";
import {useAuth} from "../auth/useAuth";

export const MRoutes = () => {
    const [clients, setClients] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [editModal, setEditModal] = useState(0);

    const {roles} = useAuth();

    useEffect(() => {
        getRouteInfo().then(response => {
            setClients(response.data)
        })
    }, [])

    const createClient = (client) => {
        addRouteInfo(client).finally(() => {
            setModalShow(false);
            getRouteInfo().then(response => {
                setClients(response.data)
            })
        })
    }

    const editClient = (client) => {
        editRouteInfo(client).finally(() => {
            setModalShow(false);
            getRouteInfo().then(response => {
                setClients(response.data)
            })
        }).finally(() => setEditModal(0))
    }

    const onEdit = (id) => {
        setEditModal(id);
        setModalShow(true)
    }

    const onDelete = (id) => {
        deleteRouteInfo({id}).then(() => {
            getRouteInfo().then(response => {
                setClients(response.data)
            })
        });
    }

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center text-center">
                <div className="w-75">
                    <div className="d-flex justify-content-end mb-1">
                        {roles.length > 1 && <Button variant="primary" onClick={() => setModalShow(true)} size="m">
                            Добавить
                        </Button>
                        }
                    </div>
                </div>
            </div>
            <MyTable data={clients} headers={["ID", "Страна", "Климат", "Длительность", "Отель", "Стоимость"]} onEdit={onEdit} isDelete onDelete={onDelete}/>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} header={"Добавить маршрут"}
                     formHeaders={[["Страна", "country"], ["Климат", "climate"], ["Длительность", "duration"], ["Отель", "hotel"], ["Стоимость", "cost"]]}
                     create={createClient} editModal={editModal} edit={editClient}/>
        </div>
    );
};

