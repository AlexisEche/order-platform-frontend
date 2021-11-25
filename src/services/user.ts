import axios from "axios";

import { UserSignup, UserLogin } from "@/typing/interface";

import { AxiosResponse } from "axios";

const BASE_URL =
  process.env.VUE_APP_BASE_URL != undefined ? process.env.VUE_APP_BASE_URL : "";

const login = async (userLogin: UserLogin) => {
  return await axios.post(`${BASE_URL}token/`, userLogin).then(function (res) {
    const response: AxiosResponse = res;

    const access = response.data;

    if (res.data) {
      localStorage.setItem("token", access || "");
    }
    return res;
  });
};

const signup = async (userSignup: UserSignup) => {
  return await axios.post(`${BASE_URL}accounts/register/`, userSignup);
};

export const userService = {
  login,
  signup,
};
