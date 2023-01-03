import { ILocationDetailsProps } from "./interfaces/interfaces";
/**
 * @returns A component to display location details
 */
function LocationDetails({ locationData }: ILocationDetailsProps) {

    const { ip } = locationData;
    const { connection } = locationData;
    const { city } = locationData;
    const { region } = locationData;
    const { country } = locationData;
    const { timezone } = locationData;

    return (
        <div className="container location-details-container position-relative">
            <div className="mx-3 mx-sm-auto card border-radius px-3">
                <div className="row px-2 px-lg-4 py-3 py-lg-5">
                    <div className="col-md-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 mb-md-1 fw-bold location-details-heading pb-2 text-secondary">IP address</h6>
                        <h3 className="mb-0 location-data">{ip}</h3>
                    </div>
                    <div className="col-md-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 mb-md-1 fw-bold location-details-heading pb-2 text-secondary">Location</h6>
                        <h3 className="mb-0 location-data"><span>{city}, </span><span>{region}, </span><span>{country}</span></h3>
                    </div>
                    <div className="col-md-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 mb-md-1 fw-bold location-details-heading pb-2 text-secondary">Timezone</h6>
                        <h3 className="mb-0 location-data"><span>UTC</span><span>{timezone?.utc}</span></h3>
                    </div>
                    <div className="col-md-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 mb-md-1 fw-bold location-details-heading pb-2 text-secondary">ISP</h6>
                        <h3 className="mb-0 location-data">{connection?.isp}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LocationDetails;
