import { getAllInvoices } from "@/network/apis/dashboard/invoices/invoices.api";
import { invoiciesSearchQueryParams } from "@/network/apis/dashboard/invoices/types";
import { useQuery } from "react-query";

const useGetInvoicies = ({ page, page_size }: invoiciesSearchQueryParams) => {
  return useQuery(
    `search-${page}-${page_size}`,
    () =>
      getAllInvoices({
        page: 1,
        page_size: 10,
      }),
    {
      enabled: true,
    },
  );
};

export default useGetInvoicies;
