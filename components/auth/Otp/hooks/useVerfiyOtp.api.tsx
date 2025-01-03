import { VerifyOtpApiData } from "@/network/apis/auth/VerfiyOtp/types";
import { VerifyOtp } from "@/network/apis/auth/VerfiyOtp/verifyOtp.api";
import { UseMutateApi } from "@/utils/types/useMutate";
import { useMutation } from "react-query";
import { VerfiyOtpResponse } from "../types";
const useVerfiyOtpApi: UseMutateApi<
  VerifyOtpApiData,
  VerfiyOtpResponse,
  VerifyOtpApiData
> = ({ onSuccess, onError }) => {
  return useMutation(VerifyOtp, {
    onSuccess,
    onError,
  });
};

export default useVerfiyOtpApi;
