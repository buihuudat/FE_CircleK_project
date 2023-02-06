import axios from "axios";
import axiosClient, { URL_SV2 } from "./axiosClient";

const voucherApi = {
  create: (payload) => axios.post(`${URL_SV2}/voucher/create`, payload),
  get: (payload) => axios.post(`${URL_SV2}/voucher/get`, payload),
  gets: () => axios.get(`${URL_SV2}/voucher/gets`),
  update: (payload) =>
    axios.put(`${URL_SV2}/voucher/update/${payload.id}`, payload),
  delete: (payload) => axios.delete(`${URL_SV2}/voucher/delete/${payload.id}`),
};

export default voucherApi;
