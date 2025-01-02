import axios from "@/network/axios";
import { LoginApiData } from "./types";
import { AppApis } from "@/utils/constants/appApis";

export const Login = async (data: LoginApiData) => {
  return await axios.post(AppApis.auth.login, data);
};
