import { useEffect, useState } from 'react';

import LocationDetails from "./LocationDetails";
import MapResult from "./MapResult";
import SeachIPAddress from "./SeachIPAddress";
import { getLocationFromIP } from './services/ipTrackingService';
/**
 * @returns IP Address Tracker 
 */
function IpAddressTracker() {

    const [ipAddress, setIpAddress] = useState<any>('');
    const [locationData, setLocationData] = useState<any>({})
    /**
     * getting the location data object from the entered IP Address
     */
    useEffect(() => {
        getLocationFromIP(ipAddress).then(res => {
            if (res.data.success) setLocationData(res.data);
            else alert("Wrong IP")
        })
    }, [ipAddress]);

    return (
        <div className='h-100 overflow-hidden d-flex flex-column'>
            <div className="search-ip-section flex-shrink-0">
                < SeachIPAddress setIpAddress={setIpAddress} />
            </div>
            <LocationDetails locationData={locationData} />
            <MapResult locationData={locationData} />
        </div>
    )
};

export default IpAddressTracker;
