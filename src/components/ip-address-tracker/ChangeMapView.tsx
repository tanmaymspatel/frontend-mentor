import { useMap } from "react-leaflet";
import { IChangeMapViewProps } from "./interfaces/interfaces";
/**
 * @returns Renders new map. after new IP Address is searched 
 * @param cocoords co-ordinates related to the newly submitted IP Address
 */
function ChangeMapView({ coords }: IChangeMapViewProps) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
}

export default ChangeMapView;

