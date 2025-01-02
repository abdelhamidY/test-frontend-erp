import { LoginApiData } from "@/network/apis/auth/Login/types";
import { UseMutateApi } from "@/utils/types/useMutate";
import { useMutation } from "react-query";
import { Login } from "@/network/apis/auth/Login/login.api";
// don't forget to import LoginResponse
// import { LoginResponse }

const useLoginApi: UseMutateApi<LoginApiData, {}, LoginApiData> = ({
  onSuccess,
  onError,
}) => {
  return useMutation(Login, {
    onSuccess,
    onError,
  });
};

export default useLoginApi;
