import axiosClient from "./axiosClient";

const userApi = {
  getAll: () => axiosClient.get("User"),
  getUser: (payload) => axiosClient.get(`User/${payload}`),
  update: (payload) => axiosClient.put(`User/${payload.id}`),
};

export default userApi;
