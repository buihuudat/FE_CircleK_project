import axiosClient from "./axiosClient";
const productApi = {
  getAllProducts: () => axiosClient.get("Product"),
  create: (payload) => axiosClient.post("Product/create", payload),
};

export default productApi;
