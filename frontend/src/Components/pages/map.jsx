import React, { useState, useEffect } from "react"; 
import Sidebar from "../sidebar";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import L from "leaflet";
import '../Map.css'
import PostService from "../../API/GETIinfo";
import MarkerClusterGroup from "@changey/react-leaflet-markercluster";

const markerIcon = new L.Icon({
    iconUrl: require("./images/pin.png"),
    iconSize: [45, 45],
    iconAnchor: [17, 46],
    popupAnchor: [8, -46],
})

function Map() {

    const [info, setinfo] = useState([])
    useEffect(()=>{
        parsCoords()
    }, [])
    async function parsCoords(id){
        const response = await PostService.getAll();
        setinfo(response.data)
    }

            return(
                <div>
                    <Sidebar/>
                <MapContainer center={[55.74,  37.61]} zoom={8} zoomControl={false} >
                
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                    <ZoomControl position='bottomright' />
                    <MarkerClusterGroup>
                    { info.map((pars) =>
                        
                            <Marker position={[pars.latitude, pars.longitude]} icon={markerIcon}>
                                <Popup>
                                {[pars.city]} <br /> {[pars.latitude]} <br /> {[pars.longitude]}
                                </Popup>
                            </Marker>
                        
                    )}
                    </MarkerClusterGroup>
                </MapContainer>
                </div>
            )
}

export default Map;