import React, { useState, useEffect } from "react"; 
import { MapContainer, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import L from "leaflet";
import '../Map.css'
import PostService from "../../API/GETIinfo";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";
import Modal from "../Modal/Modal";


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
        console.log(response.data)
        setinfo(response.data)
    }

    async function fetchById(id){
        const response = await PostService.getById(id);
        setId(response.data)
        console.log(response.data)
    }
            return(
                <div>
                <MapContainer center={[55.74,  37.61]} zoom={8} zoomControl={false} >

                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <ZoomControl position='bottomright' />
                    <MarkerClusterGroup>
                    
                    { info.map((pars) =>
                        
                            <Marker position={[pars.latitude, pars.longitude]} icon={markerIcon}>
                                 
                                <Popup>
                                <b>Населенный пункт: {[pars.city]}</b><br/>
                                <b>Широта: {[pars.latitude]}</b><br/> 
                                <b>Долгота: {[pars.longitude]}</b> <br/> 
                                <div>
                                {pars.mil_image_url && <img className="mil_img" src={pars.mil_image_url}  alt="Изображение" />}
                                </div>
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
