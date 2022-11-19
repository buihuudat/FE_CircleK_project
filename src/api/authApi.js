import axiosClient from "./axiosClient";

const authApi = {
  signin: (payload) => axiosClient.post("Auth/Signin", payload),
  signup: (payload) => axiosClient.post("Auth/Signup", payload),
};

export default authApi;
