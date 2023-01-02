function LocationDetails({ locationData }: any) {

    const { ip } = locationData;
    const { connection } = locationData;
    const { region } = locationData;
    const { country } = locationData;
    const { timezone } = locationData;

    return (
        <div className=" location-details-container">
            <div className="card border-radius px-3">
                <div className="row px-4 py-5">
                    <div className="col-lg-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 fw-bold location-details-heading pb-2 text-secondary">IP address</h6>
                        <h3 className="mb-0 location-data">{ip}</h3>
                    </div>
                    <div className="location-data-col col-lg-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 fw-bold location-details-heading pb-2 text-secondary">Location</h6>
                        <h3 className="mb-0 location-data"><span>{region}, </span><span>{country}</span></h3>
                    </div>
                    <div className="location-data-col col-lg-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 fw-bold location-details-heading pb-2 text-secondary">Timezone</h6>
                        <h3 className="mb-0 location-data"><span>UTC</span><span>{timezone?.utc}</span></h3>
                    </div>
                    <div className="location-data-col col-lg-3 py-3 py-lg-0 col-data">
                        <h6 className="text-uppercase mb-0 fw-bold location-details-heading pb-2 text-secondary">ISP</h6>
                        <h3 className="mb-0 location-data">{connection?.isp}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LocationDetails;
