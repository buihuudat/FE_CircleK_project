import axiosClient from "./axiosClient";

const producerApi = {
  getAllProducers: () => axiosClient.get("Producer"),
};

export default producerApi;
