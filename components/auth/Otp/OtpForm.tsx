"use client";
import { useAppDispatch, useAppSelector } from "@/redux/redux.configration";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import useVerfiyOtpFormik from "./hooks/useVerfiyOtp.formik";
import useVerfiyOtpApi from "./hooks/useVerfiyOtp.api";
import GaragHeroToast from "@/utils/helpers/garagHeroToast/garageHeroToast";
import { useRouter } from "next/navigation";
import { setAuthToken, setAuthUser } from "@/redux/slices/auth.slice";
import { appRoutes } from "@/utils/constants/appRoutes";

export function EmailVerificationOTPForm() {
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [timer, setTimer] = useState(600); // 600 seconds = 10 minutes
  const userSlice = useAppSelector((state) => state.authSlice);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { mutate: verifyOtpMutate, isLoading: verifyOtpLoading } =
    useVerfiyOtpApi({
      onSuccess: (response) => {
        GaragHeroToast({
          type: "success",
          title: "Success",
          description: response.data.message,
        });

        dispatch(
          setAuthUser({
            user: {
              ...response.data.user,
            },
          }),
        );

        dispatch(setAuthToken({ token: response.data.access_token }));

        router.push(appRoutes.dashboard);
      },
      onError: (error) => {
        // OTP not generated
        if (error.response?.status === 400) {
          GaragHeroToast({
            type: "error",
            title: "Error",
            description: error.response.data.detail,
          });
        }

        // Unauthorized or otp expired
        if (error.response?.status === 401) {
          GaragHeroToast({
            type: "error",
            title: "Error",
            description: error.response.data.detail,
          });
        }

        // Account deactivated
        if (error.response?.status === 402) {
          GaragHeroToast({
            type: "error",
            title: "Error",
            description: error.response.data.detail,
          });
        }

        // Not Found
        if (error.response?.status === 404) {
          GaragHeroToast({
            type: "error",
            title: "Error",
            description: error.response.data.detail,
          });
        }

        // Please verify your email address
        if (error.response?.status === 423) {
          GaragHeroToast({
            type: "error",
            title: "Error",
            description: error.response.data.detail,
          });
        }

        // Internal Server Error
        if (error.response?.status === 500) {
          GaragHeroToast({
            type: "error",
            title: "Error",
            description: error.response.data.detail,
          });
        }
      },
    });

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isResendDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            setIsResendDisabled(false);
            clearInterval(interval!);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval!);
  }, [isResendDisabled]);

  const handleResendOTP = () => {
    // Call your API to resend the OTP
    console.log("OTP resent!");

    // Disable the resend button and reset the timer
    setIsResendDisabled(true);
    setTimer(600);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const otpFormik = useVerfiyOtpFormik({
    onSubmit: (values) => {
      console.log(values.otp.join(""));
      verifyOtpMutate({
        email: userSlice.email,
        otp: values.otp.join(""),
        user_type: "root",
      });
    },
  });

  return (
    <section className="bg-white px-4 py-8 dark:bg-gray-900 lg:py-0">
      <div className="lg:flex">
        <div className="bg-primary-600 hidden w-full max-w-md p-12 lg:block lg:h-screen">
          <div className="mb-8 flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center text-2xl font-semibold text-white"
            >
              <img alt="" src="./gh_small_logo.svg" className="mr-2 size-11" />
            </a>
            <a
              href="/login"
              className="text-primary-100 inline-flex items-center text-sm font-medium hover:text-white"
            >
              <svg
                className="mr-1 size-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Go back
            </a>
          </div>
        </div>
        <div className="mx-auto flex items-center md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Verify your email address
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              We emailed you a six-digit code to&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                {userSlice.email}
              </span>
              . Enter the code below to confirm your email address.
            </p>
            <form onSubmit={otpFormik.handleSubmit}>
              {/* OTP Input Fields */}
              <div className="my-4 flex space-x-2 sm:space-x-4 md:my-6">
                {/* {Array.from({ length: 6 }, (_, index) => (
                  <input
                    key={index}
                    maxLength={1}
                    type="text"
                    required
                    className="block size-12 rounded-lg border border-gray-300 bg-white py-3 text-center text-2xl font-extrabold text-gray-900 focus:border-ghred-500 focus:ring-ghred-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-ghred-500 dark:focus:ring-ghred-500 sm:size-16 sm:py-4 sm:text-4xl"
                  />
                ))} */}
                {otpFormik.values.otp.map((_, index) => (
                  <input
                    key={index}
                    name={`otp[${index}]`}
                    maxLength={1}
                    type="text"
                    value={otpFormik.values.otp[index]}
                    onChange={otpFormik.handleChange}
                    onKeyUp={(e) => {
                      if (
                        e.currentTarget.value &&
                        index < otpFormik.values.otp.length - 1
                      ) {
                        (
                          document.querySelector(
                            `input[name="otp[${index + 1}]"]`,
                          ) as HTMLInputElement
                        )?.focus();
                      }
                    }}
                    required
                    className="block size-12 rounded-lg border border-gray-300 bg-white py-3 text-center text-2xl font-extrabold text-gray-900 focus:border-ghred-500 focus:ring-ghred-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-ghred-500 dark:focus:ring-ghred-500 sm:size-16 sm:py-4 sm:text-4xl"
                  />
                ))}
              </div>
              <p className="mb-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400 md:mb-6">
                Make sure to keep this window open while checking your inbox.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="submit"
                  size="xl"
                  className="w-full bg-ghred-500 hover:bg-ghred-600"
                  isProcessing={verifyOtpLoading}
                  disabled={verifyOtpLoading}
                >
                  Verify account
                </Button>
                <Button
                  type="button"
                  onClick={handleResendOTP}
                  disabled={isResendDisabled}
                  className={`w-full ${
                    isResendDisabled
                      ? "cursor-not-allowed bg-gray-400"
                      : " hover:bg-ghblue-600"
                  }`}
                >
                  {isResendDisabled
                    ? `Resend OTP (${formatTime(timer)})`
                    : "Resend OTP"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
