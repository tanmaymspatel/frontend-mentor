import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import { useEffect, useState } from 'react';

const iconLocation = new L.Icon({
    iconUrl: 'https://www.svgrepo.com/show/127575/location-sign.svg',
    iconSize: [50, 50],
    className: 'text-dark'
});

function MapResult({ locationData }: any) {

    const { latitude, longitude } = locationData;

    useEffect(() => {
        if (latitude && longitude) {
            setLat(latitude);
            setLng(longitude);
        }

    }, [latitude, longitude]);

    const [lat, setLat] = useState(21.1702);
    const [lng, setLng] = useState(72.8311);

    return (
        <MapContainer center={[Number(lat), Number(lng)]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[Number(lat), Number(lng)]} icon={iconLocation}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapResult
