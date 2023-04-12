import React, { useState, useEffect } from "react"; 
// import Sidebar from "../sidebar";
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

    useEffect(()=>{parsCoords()}, [])

    async function parsCoords(id){
        const response = await PostService.getAll();
        setinfo(response.data)
    }

            return(
                <div>

                   

                    {/* <Sidebar/> */}
                <MapContainer center={[55.74,  37.61]} zoom={8} zoomControl={false} >
                <Modal active={modalActive} setActive={setModalActive}><h1>sdfghjk</h1></Modal>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <ZoomControl position='bottomright' />
                    <MarkerClusterGroup>
                    
                    { info.map((pars) =>
                        
                            <Marker position={[pars.latitude, pars.longitude]} icon={markerIcon}>
                                 
                                <Popup>
                                {[pars.city]} <br/> {[pars.latitude]} <br/> {[pars.longitude]} <br/> 
                                <button onClick={() => setModalActive(true)}>Открыть</button>
                                </Popup>
                                 
                            </Marker>                                                 
                    )}

                    </MarkerClusterGroup>
                    
                </MapContainer>
                <Modal active={modalActive} setActive={setModalActive}><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Velit voluptatum sunt et quibusdam molestias qui, quas cumque quo, laboriosam ipsum officiis quisquam porro fugiat,
                     modi nulla ad veniam minima accusantium.</p></Modal>
                </div>
            )
}

export default Map;