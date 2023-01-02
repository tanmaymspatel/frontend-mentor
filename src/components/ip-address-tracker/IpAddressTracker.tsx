import { useEffect, useState } from 'react';

import LocationDetails from "./LocationDetails";
import MapResult from "./MapResult";
import SeachIPAddress from "./SeachIPAddress";
import { getLocationFromIP } from './services/ipTrackingService';

function IpAddressTracker() {

    const [ipAddress, setIpAddress] = useState<any>('');
    const [locationData, setLocationData] = useState<any>({})

    useEffect(() => {
        getLocationFromIP(ipAddress).then(res => setLocationData(res.data))
    }, [ipAddress]);

    return (
        <div className="h-100">
            <div className="search-ip-section flex-shrink-0">
                < SeachIPAddress setIpAddress={setIpAddress} />
            </div>
            <LocationDetails locationData={locationData} />
            <MapResult locationData={locationData} />
        </div>
    )
};

export default IpAddressTracker;
