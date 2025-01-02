export type AvailableCodes = 200 | 400 | 404 | 403 | 422 | 500 | 401 | 402;

export type SuccessResponse<T> = {
  status: AvailableCodes;
  message: string;
  data: T;
};

export type ErrorResponse<T> = {
  status: AvailableCodes;
  detail: string;
};
