import axios from "axios";
import queryString from "query-string";

const baseURL = "http://localhost:5000/api/";
export const URL_SV2 = "http://localhost:9000/api/v1";

export const axiosClient = axios.create({
  baseURL,
});

axiosClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
      // authorization: `Barer ${getToken()}`,
    },
  };
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    if (!err.response) {
      return alert(err);
    }
    throw err.response;
  }
);


export default axiosClient;
