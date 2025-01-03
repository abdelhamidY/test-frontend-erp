import { RequestVerficationApiData } from "@/network/apis/auth/VerfiyOtp/types";
import { RequestVerfication } from "@/network/apis/auth/VerfiyOtp/verifyOtp.api";
import { UseMutateApi } from "@/utils/types/useMutate";
import { useMutation } from "react-query";
const useRequestVerfication: UseMutateApi<
  RequestVerficationApiData,
  {},
  RequestVerficationApiData
> = ({ onSuccess, onError }) => {
  return useMutation(RequestVerfication, {
    onSuccess,
    onError,
  });
};

export default useRequestVerfication;
