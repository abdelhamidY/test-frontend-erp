import axios from "@/network/axios";
import { AppApis } from "@/utils/constants/appApis";
import {
  SuccessResponseWithPagination
} from "@/utils/types/Responses.types";
import { invoiciesSearchQueryParams } from "./types";
import { Invoice } from "@/network/models/Invoices";

export const getAllInvoices = (params: invoiciesSearchQueryParams) => {
  return axios.get<SuccessResponseWithPagination<Invoice[]>>(
    AppApis.accountant.invoices,
    {
      params,
    },
  );
};
