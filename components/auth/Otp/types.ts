import { User } from "@/network/models/user";

export type OtpFormInitialValues = {
  otp: [] | string[];
};

export type VerfiyOtpResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};
