"use client";
import InputCustom from "@/components/shared/TextInput";
import GaragHeroToast from "@/utils/helpers/garagHeroToast/garageHeroToast";
import { Button, Card, Checkbox, Label } from "flowbite-react";
import useLoginApi from "./hooks/useLogin.api";
import useLoginFormik from "./hooks/useLogin.formik";
import useRequestVerfication from "./hooks/useRequetVerfication.api";
import { useRouter } from "next/navigation";
import { appRoutes } from "@/utils/constants/appRoutes";
import { useAppDispatch } from "@/redux/redux.configration";
import { setAuthUser } from "@/redux/slices/auth.slice";

export function LoginForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    mutate: mutateRequestVerfication,
    isLoading: isRequestVerficationLoading,
  } = useRequestVerfication({
    onSuccess(response) {
      GaragHeroToast({
        type: "success",
        title: "Verfiy your email",
        description: "We've sent you an email to verify your account",
      });
    },
    onError(error) {},
  });

  const { mutate: mutateLogin, isLoading: isLoginLoading } = useLoginApi({
    onSuccess(response) {
      router.push(appRoutes.otp);
      GaragHeroToast({
        type: "success",
        title: "Verfiy OTP",
        description: response.data.message,
      });
      dispatch(
        setAuthUser({
          email: loginFormik.values.email,
        }),
      );
    },
    onError(error) {
      // user not found
      if (error.response?.status === 404) {
        loginFormik.setFieldError("email", error.response.data.detail);
      }
      // incorrect password
      if (error.response?.status === 401) {
        loginFormik.setFieldError("password", error.response.data.detail);
      }
      // Bad Request
      if (error.response?.status === 400) {
        loginFormik.setFieldError("email", error.response.data.detail);
        loginFormik.setFieldError("password", error.response.data.detail);
      }
      // Forbidden
      if (error.response?.status === 403) {
        loginFormik.setFieldError("password", error.response.data.detail);
      }
      // Verfiy your email
      if (error.response?.status === 423) {
        loginFormik.setFieldError("email", error.response.data.detail);
        mutateRequestVerfication({
          email: loginFormik.values.email,
          user_type: "root",
        });
      }
    },
  });

  const loginFormik = useLoginFormik({
    onSubmit: async (values) => {
      mutateLogin({
        email: values.email,
        password: values.password,
        user_type: "root",
        ip_address: "196.221.27.134",
      });
    },
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <img className="mb-6 mr-2" src="./gh_full_logo.svg" alt="logo" />
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <Card className="shadow-none">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={loginFormik.handleSubmit}
            >
              <div>
                <Label htmlFor="email" className="mb-2 block dark:text-white">
                  Your email
                </Label>
                <InputCustom
                  id="email"
                  placeholder="name@company.com"
                  type="email"
                  value={loginFormik.values.email}
                  onChange={loginFormik.handleChange}
                  error={
                    loginFormik.touched.email &&
                    loginFormik.errors.email !== undefined
                  }
                  helperText={loginFormik.errors.email}
                />
              </div>
              <div>
                <Label
                  htmlFor="password"
                  className="mb-2 block dark:text-white"
                >
                  Password
                </Label>
                <InputCustom
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  value={loginFormik.values.password}
                  onChange={loginFormik.handleChange}
                  error={
                    loginFormik.touched.password &&
                    loginFormik.errors.password !== undefined
                  }
                  helperText={loginFormik.errors.password}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <Checkbox id="remember" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </Label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-primary-600 dark:text-primary-500 text-sm font-medium hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <Button
                type="submit"
                className="w-full bg-ghred-500 hover:bg-ghred-600"
                isProcessing={isLoginLoading}
                disabled={isLoginLoading}
              >
                Sign in
              </Button>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Don’t have an account yet?&nbsp;
                <a
                  href="#"
                  className="text-primary-600 dark:text-primary-500 font-medium hover:underline"
                >
                  Sign up
                </a>
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
