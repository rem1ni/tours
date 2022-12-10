import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {MyTable} from "../components/MyTable";
import {MyModal} from "../components/MyModal";
import {addUserInfo, changeUserRole, deleteUserInfo, editUserInfo, getUsersInfo} from "../api/rest/users";
import {addRouteInfo, deleteRouteInfo, editRouteInfo, getTripsInfo} from "../api/rest/trips";
import {getClientsInfo} from "../api/rest/clients";
import {getRouteInfo} from "../api/rest/routes";
import {MyModelTripInfo} from "../components/MyModelTripInfo";

export const Trips = () => {
    const [clients, setClients] = useState([]);
    const [clientsInfo, setClientsInfo] = useState([]);
    const [routes, setRoutes] = useState([]);

    const [modalShow, setModalShow] = useState(false);
    const [modalInfoShow, setModalInfoShow] = useState(false);

    const [editModal, setEditModal] = useState(0);

    const [fullInfoId, setFullInfoId] = useState(null);

    useEffect(() => {
        getTripsInfo().then(response => {
            setClients(response.data)
            getClientsInfo().then(response => {
                setClientsInfo(response.data)
            })
            getRouteInfo().then(response => {
                setRoutes(response.data)
            })
        })


    }, [])
    console.log(routes)
    const createClient = (client) => {
        addRouteInfo(client).finally(() => {
            setModalShow(false);
            getTripsInfo().then(response => {
                setClients(response.data)
            })

        })
    }

    const editClient = (client) => {
        editRouteInfo(client).finally(() => {
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
        deleteRouteInfo({id}).then(() => {
            getTripsInfo().then(response => {
                setClients(response.data)
            })
        });
    }

    const onShowInfo = (id, clientId, routeId) => {
        setFullInfoId({id, clientId, routeId});
        setModalInfoShow(true);
    }

    const getDataForInfo = (data) => {
        if (data === null) return null;
        return {
            id: data.id,
            client: clientsInfo.filter(el => el.id === data.clientId),
            routes: routes.filter(el => el.id === data.routeId),
        }
    }

    return (
        <div className="mt-5">
            <div className="d-flex justify-content-center text-center">
                <div className="w-75">
                    <div className="d-flex justify-content-end mb-1">
                        <Button variant="primary" onClick={() => setModalShow(true)} size="m">
                            Продать путевку
                        </Button>
                    </div>
                </div>
            </div>
            <MyTable data={clients} headers={["ID", "Маршрут", "Клиент", "Дата отправления", "Количество", "Скидка"]}
                     onEdit={onEdit} isDelete onDelete={onDelete} isShowFullInfo onShowFullInfo={onShowInfo}/>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} header={"Продать путевку"}
                     formHeaders={[["Дата отправления", "time"], ["Количество", "count"], ["Скидка", "discount"]]}
                     create={createClient} editModal={editModal} edit={editClient} isSelect selectClients={clientsInfo}
                     routes={routes}/>
            <MyModelTripInfo show={modalInfoShow} onHide={() => setModalInfoShow(false)} data={getDataForInfo(fullInfoId)}/>
        </div>
    );
};
