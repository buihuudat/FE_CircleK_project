import axios from "axios";
import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => axiosClient.get("User"),
  getUser: (payload) => axiosClient.get(`User/${payload}`),
  // update: (payload) => axiosClient.put(`User/${payload.id}`),
  create: (payload) => axiosClient.post("User/create", payload),
  delete: (payload) => axiosClient.delete(`User/${payload}`),
};

export default userApi;
