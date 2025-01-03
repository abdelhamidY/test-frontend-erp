import axiosDefault from "axios";
import Cookies from "js-cookie";
import Router from "next/router"; // Import Next.js router for redirection

let axios = axiosDefault;

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["api_key"] = process.env.NEXT_PUBLIC_API_KEY;

// Request Interceptor
axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response?.status === 401
      // &&
      // error.response?.data?.detail === "Signature has expired"
    ) {
      // Clear token and redirect to login page
      // Cookies.remove("token");
      Router.push("/login");
    }
    return Promise.reject(error);
  },
);

export default axios;
