import { SeachIPAddressProps } from "./interfaces/interfaces";
import SerachForm from "./SerachForm";

/**
 * @returns search component for IP Tracking
 */
function SeachIPAddress({ setIpAddress }: SeachIPAddressProps) {
    return (
        <div className="h-100 ip-backgound d-flex align-items-center flex-column">
            <h3 className="text-light pt-4 pb-2 pt-sm-5 pb-sm-3">IP Address Tracker</h3>
            <SerachForm setIpAddress={setIpAddress} />
        </div>
    )
};

export default SeachIPAddress;
