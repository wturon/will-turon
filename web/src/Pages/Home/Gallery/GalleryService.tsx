import axios from "axios";
import http from "../../../Services/http-common";

export const getBlobData = async () => {
  return await http
    .get(`/boards`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getImages = () =>
  axios
    .create({
      baseURL:
        "https://wttest.blob.core.windows.net/images?restype=container&comp=list",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
      },
    })
    .get("")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
