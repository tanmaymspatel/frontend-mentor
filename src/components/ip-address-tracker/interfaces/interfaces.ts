import { Dispatch } from "react";
import { number } from "yup";
/**
 * Search Component ------------------------------------------------------------------------------------
 */
export interface SeachIPAddressProps {
    setIpAddress: Dispatch<string>;
}

export interface ISerachFormProps {
    setIpAddress: Dispatch<string>;
}

export interface ISearchFormDetailsProps {
    ipAddress: string;
}
/**
 * Location details Component ------------------------------------------------------------------------------------
 */
export interface ILocationDetailsProps {
    locationData: {
        ip: number;
        connection: {
            isp: string
        };
        city: string;
        region: string;
        country: string;
        timezone: {
            utc: string
        }
    };
}
/**
 * Maps Component ------------------------------------------------------------------------------------
 */
export interface IMapResultProps {
    locationData: { latitude: number, longitude: number }
}
export interface IChangeMapViewProps {
    coords: [number, number];
}