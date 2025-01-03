"use client";
import CustomTable from "@/components/shared/CustomTable/CustomTable";
import SvgFilter from "@/icons/Filter";
import SvgRefresh from "@/icons/Refresh";
import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import useGetInvoicies from "./hooks/useGetInvoicies";

const Invoicies = () => {
  const [params, setParams] = useState<{ page: number; page_size: number }>({
    page: 1,
    page_size: 10,
  });
  const { data: invoicies, isLoading: invoiciesLoading } = useGetInvoicies({
    ...params,
  });

  console.log({ invoicies });
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Invoicies</h1>
        <div className="flex items-center gap-2">
          <Button
            outline
            slot="start"
            className="border border-gray-200 bg-white text-black hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <SvgRefresh />
              Refresh
            </span>
          </Button>
          <Button
            outline
            className="border border-gray-200 bg-white text-black hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <SvgRefresh />
              Export
            </span>
          </Button>
        </div>
      </div>
      <div className="mb-4 w-[500px]">
        <div className="flex items-center gap-3">
          <div className="relative w-full">
            <TextInput id="email" type="email" placeholder="Enter your email" />
            <div className="absolute inset-y-0 right-0 flex items-center justify-center rounded-r-lg bg-[#C81E1E] px-4">
              <button className="text-sm text-white hover:underline">
                Search
              </button>
            </div>
          </div>
          <Button
            outline
            slot="start"
            className="border border-gray-200 bg-white text-black hover:bg-gray-100"
          >
            <span className="flex items-center gap-2">
              <SvgFilter />
              Refresh
            </span>
          </Button>
        </div>
      </div>
      <CustomTable
        columns={[
          { field: "id", headerName: "ID" },
          { field: "customer_name", headerName: "Customer Name" },
          { field: "description", headerName: "Description" },
          { field: "type", headerName: "type" },
          {
            field: "date",
            headerName: "date",
          },
          {
            field: "amount",
            headerName: "Amount",
          },
          {
            field: "ar_ap",
            headerName: "AR/AP",
          },
          {
            field: "status",
            headerName: "Status",
          },
          {
            field: "payment_due_date",
            headerName: "Payment Due Date",
          },
        ]}
        data={invoicies?.data.data || []}
      />
    </div>
  );
};

export default Invoicies;
