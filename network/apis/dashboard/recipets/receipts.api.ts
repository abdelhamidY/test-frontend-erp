import axios from "@/network/axios";
import { AppApis } from "@/utils/constants/appApis";
import { SuccessResponseWithPagination } from "@/utils/types/Responses.types";
import { recipetsSearchQueryParams } from "./types";
import { Receipt } from "@/network/models/Receipts";

export const getAllRecipets = (params: recipetsSearchQueryParams) => {
  return axios.get<SuccessResponseWithPagination<Receipt[]>>(
    AppApis.accountant.receipts,
    {
      params,
    },
  );
};
