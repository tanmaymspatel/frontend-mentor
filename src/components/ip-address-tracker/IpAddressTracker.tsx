import SeachIPAddress from "./SeachIPAddress";

function IpAddressTracker() {
    return (
        <div className="h-100 d-flex flex-column">
            <div className="search-ip-section">
                < SeachIPAddress />
            </div>
            <div className="flex-grow-1">map</div>
        </div>
    )
};

export default IpAddressTracker;
