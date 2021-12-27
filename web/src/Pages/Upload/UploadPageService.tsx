import axios from "axios";
import { getEnvironmentVariables } from "../../Services/getEnvironmentVariables";

export const uploadToBlob = async (file: File) => {
  const s3EndPoint = getEnvironmentVariables().s3EndPoint;
  console.log(s3EndPoint);
  try {
    const preSignedUrl = await axios.get(s3EndPoint);
    console.log(file);
    return await axios.put(preSignedUrl.data["url"], file, {
      headers: {
        "Content-Type": file.type,
      },
    });
  } catch (e: any) {
    alert(e);
  }
};
