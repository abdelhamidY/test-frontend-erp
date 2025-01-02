import axiosDefault from "axios";

let axios = axiosDefault;

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.common["Accept"] = "application/json";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] =
  ` Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
axios.defaults.headers.common["api_key"] = process.env.NEXT_PUBLIC_API_KEY;
export default axios;
