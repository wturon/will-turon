import axios from "axios";
import { getEnvironmentVariables } from "./getEnvironmentVariables";

export const getBaseUrl = (): string => getEnvironmentVariables().apiUri;

export default axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
  },
});
