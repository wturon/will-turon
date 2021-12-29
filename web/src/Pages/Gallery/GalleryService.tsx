import axios from "axios";
import { getEnvironmentVariables } from "../../Services/getEnvironmentVariables";
import { GalleryImages } from "../../Types/GalleryImage";

export const getBlobDataAsync = async () => {
  const apiUri = getEnvironmentVariables().apiGateWay;
  try {
    const res = await axios.get<GalleryImages>(`${apiUri}/listImages`);
    return res.data;
  } catch (e: any) {
    alert(e);
  }
};
