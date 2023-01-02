import SerachForm from "./SerachForm";

function SeachIPAddress({ setIpAddress }: any) {
    return (
        <div className="h-100 ip-backgound d-flex align-items-center flex-column">
            <h3 className="text-light pt-4 pb-2 pt-sm-5 pb-sm-3">IP Address Tracker</h3>
            <SerachForm setIpAddress={setIpAddress} />
        </div>
    )
};

export default SeachIPAddress;
