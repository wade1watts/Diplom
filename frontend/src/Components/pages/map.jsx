import React, { useState, useEffect } from "react"; 
import Sidebar from "../sidebar";
import { MapContainer, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import L from "leaflet";
import '../Map.css'
import 'leaflet/dist/leaflet.css';
import PostService from "../../API/GETIinfo";
import '../../../LeafletCluster/dist/MarkerCluster.css';

const markerIcon = new L.Icon({
    iconUrl: require("./images/pin.png"),
    iconSize: [51, 51],
    iconAnchor: [17, 46],
    popupAnchor: [8, -46],
})



function Map() {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //       markers: [],
    //     };
    //   }
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
                    <ZoomControl position='topright'/>
                    {/* console.log(marker) */}
                    {/* {this.state.markers.map(marker => ( */}
                    { info.map((pars) =>
                        <Marker position={[pars.latitude, pars.longitude]} icon={markerIcon}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    
                    )}
                    
                    {/* ))} */}
                </MapContainer>
                </div>
            )
    }

export default Map;