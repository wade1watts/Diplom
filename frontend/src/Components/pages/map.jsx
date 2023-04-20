import React, { useState, useEffect } from "react"; 
// import Sidebar from "../sidebar";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import L from "leaflet";
import '../Map.css'
import PostService from "../../API/GETIinfo";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import Modal from "../Modal/Modal";
import axios from "axios";

const markerIcon = new L.Icon({
    iconUrl: require("./images/pin.png"),
    iconSize: [45, 45],
    iconAnchor: [17, 46],
    popupAnchor: [8, -46],
})

function Map() {

    const [modalActive, setModalActive] = useState(false)
    const [info, setinfo] = useState([])
    const [id, setId] = useState([])
    useEffect(()=>{parsCoords()}, [])

    async function parsCoords(id){
        const response = await PostService.getAll();
        setinfo(response.data)
    }

    async function fetchById(id){
        const response = await PostService.getById(id);
        setId(response.data)
        console.log(response.data)
    }
            return(
                <div>

                   

                    {/* <Sidebar/> */}
                <MapContainer center={[55.74,  37.61]} zoom={8} zoomControl={false} >

                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <ZoomControl position='bottomright' />
                    <MarkerClusterGroup>
                    
                    { info.map((pars) =>
                        
                            <Marker position={[pars.latitude, pars.longitude]} icon={markerIcon}>
                                 
                                <Popup>
                                {[pars.city]} <br/> {[pars.latitude]} <br/> {[pars.longitude]} <br/> 
                                <button onClick={() => setModalActive([true, pars.latitude, pars.longitude, pars.id])}>Открыть</button>
                                <button onClick={()=> fetchById(pars.id)}>GET COORDS</button>
                                </Popup>
                                 
                            </Marker>                                                 
                    )}

                    </MarkerClusterGroup>
                    
                </MapContainer>
                <Modal active={modalActive} setActive={setModalActive}/>
                </div>
            )
}

export default Map;
