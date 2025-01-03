import { getAllInventory } from "@/network/apis/dashboard/inventory/inventory.api";
import { invoiciesSearchQueryParams } from "@/network/apis/dashboard/invoices/types";
import { useQuery } from "react-query";

const useGetInventories = ({ page, page_size }: invoiciesSearchQueryParams) => {
  return useQuery(
    `search-inventory-${page}-${page_size}`,
    () =>
      getAllInventory({
        page: 1,
        page_size: 10,
      }),
    {
      enabled: true,
    },
  );
};

export default useGetInventories;
