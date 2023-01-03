import { Dispatch } from "react";
import { number } from "yup";
/**
 * Search Component ------------------------------------------------------------------------------------
 */
export interface SeachIPAddressProps {
    setIpAddress: Dispatch<number>;
}

export interface ISerachFormProps {
    setIpAddress: Dispatch<number>;
}

export interface ISearchFormDetailsProps {
    ipAddress: number | null;
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