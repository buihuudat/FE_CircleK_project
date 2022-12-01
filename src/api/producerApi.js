import axiosClient from "./axiosClient";

const producerApi = {
  getAll: () => axiosClient.get("Producer"),
  create: (payload) => axiosClient.post("Producer/create", payload),
  get: (payload) => axiosClient.get(`Producer/${payload.id}`, payload),
  update: (payload) => axiosClient.put(`Producer/${payload.id}`, payload),
};

export default producerApi;
