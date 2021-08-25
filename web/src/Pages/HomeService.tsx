import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getBoardData = async () => {
  return await axios
    .get(`${BASE_URL}/boards`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
