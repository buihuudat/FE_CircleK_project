import { URL_SV2 } from "./axiosClient";
import axios from "axios";

const orderApi = {
  getOrders: () => axios.get(`${URL_SV2}/cart/gets`),
  getOrder: (payload) => axios.get(`${URL_SV2}/cart/get/${payload.id}`),
  createOrder: (payload) => axios.post(`${URL_SV2}/cart/create`, payload),
  updateOrder: (payload) =>
    axios.put(`${URL_SV2}/cart/update/${payload.id}`, payload),
  deleteOrder: (payload) =>
    axios.delete(`${URL_SV2}/cart/delete/${payload.id}`),
  getOrderByUID: (payload) => axios.get(`${URL_SV2}/cart/user/${payload.id}`),
  deleteOrderByUID: (payload) =>
    axios.delete(`${URL_SV2}/cart/user/delete/${payload.id}`),
};

export default orderApi;
