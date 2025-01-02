import { UseFormikTypeProps } from "@/utils/types/UseFormik.types";
import useEmailValidation from "@/utils/validation/useEmail.validation";
import usePasswordValidation from "@/utils/validation/usePassword.validation";
import { useFormik } from "formik";
import * as yup from "yup";
import { LoginFormInitialValues } from "../types";

function useLoginFormik({
  onSubmit,
}: UseFormikTypeProps<LoginFormInitialValues>) {
  return useFormik<LoginFormInitialValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: useEmailValidation(),
      password: usePasswordValidation(),
    }),
    onSubmit,
  });
}

export default useLoginFormik;
