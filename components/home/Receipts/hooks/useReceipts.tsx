import { invoiciesSearchQueryParams } from "@/network/apis/dashboard/invoices/types";
import { getAllRecipets } from "@/network/apis/dashboard/recipets/receipts.api";
import { useQuery } from "react-query";

const useGetReceipts = ({ page, page_size }: invoiciesSearchQueryParams) => {
  return useQuery(
    `search-receipt-${page}-${page_size}`,
    () =>
      getAllRecipets({
        page: 1,
        page_size: 10,
      }),
    {
      enabled: true,
    },
  );
};

export default useGetReceipts;
