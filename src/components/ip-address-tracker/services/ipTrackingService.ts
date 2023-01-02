import axios from "axios";

const apiKey = "https://ipwho.is";
// const apiPoint = "https://geo.ipify.org/api/v2/country";

export const getLocationFromIP = (ip: any) => axios.get(`${apiKey}/${ip}`);

