import SerachForm from "./SerachForm";

function SeachIPAddress() {
    return (
        <div className="h-100 ip-backgound d-flex align-items-center justify-content-center flex-column">
            <h3 className="text-light">IP Address Tracker</h3>
            <SerachForm />
        </div>
    )
};

export default SeachIPAddress;
