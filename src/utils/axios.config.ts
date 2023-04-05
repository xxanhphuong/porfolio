import axios from "axios";

import { API_ENDPOINT } from "@/utils/config";

console.log(API_ENDPOINT, "API_ENDPOINT");
console.log(process.env.API_ENDPOINT, "process.env.API_ENDPOINT");

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  timeout: 30000,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // const message =
    //   error && error?.response?.data?.message
    //     ? error?.response?.data?.message
    //     : "Sorry, something went wrong";
    // const status =
    //   error && error?.response?.status ? error?.response?.status : null;
    // if (status === 401) {
    // } else if (status === 422) {
    // } else if (status >= 500 || message === "Network Error") {
    // } else if (status === 410) {
    // } else {
    // }

    return Promise.reject(error);
  }
);

// api.defaults.headers.common.Authorization = getToken()
//   ? `Bearer ${getToken()}`
//   : null;

export function setAuthorization(token: any) {
  api.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;
}

export function clearAuthorization() {
  delete api.defaults.headers.common.Authorization;
}

export function removeAuthorization() {
  // for Logout
  setAuthorization(null);
}
