import axiosClient from "./axiosClient";
const productApi = {
  getAllProducts: () => axiosClient.get("Product"),
  create: (payload) => axiosClient.post("Product/create", payload),
  delete: (payload) => axiosClient.delete(`Product/${payload}`),
};

export default productApi;
