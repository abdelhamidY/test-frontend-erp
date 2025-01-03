import { UseFormikTypeProps } from "@/utils/types/UseFormik.types";
import useOtpValidation from "@/utils/validation/useOtp.validation";
import { useFormik } from "formik";
import * as yup from "yup";
import { OtpFormInitialValues } from "../types";

function useVerfiyOtpFormik({ onSubmit }: UseFormikTypeProps<OtpFormInitialValues>) {
  return useFormik<OtpFormInitialValues>({
    initialValues: {
      otp: Array(6).fill(""),
    },
    validationSchema: yup.object({
      otp: useOtpValidation(),
    }),
    onSubmit,
  });
}

export default useVerfiyOtpFormik;
