import { MapContainer, Marker, TileLayer } from 'react-leaflet';

import L from 'leaflet';
import { useEffect, useState } from 'react';
import ChangeMapView from './ChangeMapView';
import { IMapResultProps } from './interfaces/interfaces';
/**
 * Customised map marker 
 */
const iconLocation = new L.Icon({
    iconUrl: require('../../assets/images/icon-location.svg').default,
    iconSize: [50, 60],
    className: 'text-dark'
});
/**
 * @returns location displayed in map type of the entered IP Address 
 */
function MapResult({ locationData }: IMapResultProps) {

    const { latitude, longitude } = locationData;

    const [lat, setLat] = useState(37.3860517);
    const [lng, setLng] = useState(-122.0838511);
    /**
     * Setting the latitude and longitude value after searching it
     */
    useEffect(() => {
        if (latitude && longitude) {
            setLat(latitude);
            setLng(longitude);
        }
    }, [latitude, longitude]);

    return (
        <MapContainer center={[lat, lng]} zoom={20} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={iconLocation}>
            </Marker>
            <ChangeMapView coords={[lat, lng]} />
        </MapContainer>
    )
}

export default MapResult
