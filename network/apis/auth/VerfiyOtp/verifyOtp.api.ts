import axios from "@/network/axios";
import { AppApis } from "@/utils/constants/appApis";
import { RequestVerficationApiData, VerifyOtpApiData } from "./types";

export const RequestVerfication = async (data: RequestVerficationApiData) => {
  return await axios.post(AppApis.auth.request_verfication, data);
};

export const VerifyOtp = async (data: VerifyOtpApiData) => {
  return await axios.post(AppApis.auth.verify_otp, data);
};
