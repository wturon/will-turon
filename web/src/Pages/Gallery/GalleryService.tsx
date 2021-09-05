import http from "../../Services/http-common";
import { GalleryImage } from "../../Types/GalleryImage";

export const getBlobDataAsync = async (): Promise<
  ReadonlyArray<GalleryImage>
> => {
  return await http
    .get(`/images`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};
