export type RequestVerficationApiData = {
  email: string;
  user_type: string;
};

export type VerifyOtpApiData = {
  email: string;
  otp: string;
  user_type: string;
  ip_address?: string;
};
