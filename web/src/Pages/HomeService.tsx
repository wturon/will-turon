import http from "../Services/http-common";

export const getBoardData = async () => {
  return await http
    .get(`/boards`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
