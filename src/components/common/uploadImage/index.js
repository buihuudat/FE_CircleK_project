import axios from "axios";
import { dnrUri } from "../../../api/axiosClient";

export const imageUpload = async (img) => {
  const data = new FormData();
  data.append("file", img);
  data.append("upload_preset", "circleK");
  data.append("clound_name", "ddtagvynp");
  const image = await axios.post(dnrUri, data);
  return image.data.url;
};
