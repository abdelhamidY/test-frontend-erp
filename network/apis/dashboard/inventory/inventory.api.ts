import axios from "@/network/axios";
import { AppApis } from "@/utils/constants/appApis";
import { SuccessResponseWithPagination } from "@/utils/types/Responses.types";
import { Invoice } from "@/network/models/Invoices";
import { inventorySearchQueryParams } from "./types";
import { Inventory } from "@/network/models/Inventory";

export const getAllInventory = (params: inventorySearchQueryParams) => {
  return axios.get<SuccessResponseWithPagination<Inventory[]>>(
    AppApis.accountant.inventory,
    {
      params,
    },
  );
};
