"use client";
import React from "react";
import { HiArrowUp } from "react-icons/hi";

type InfoProps = {
  type: "number" | "percentate" | "";
};
const Info = () => {
  return (
    <div className="flex flex-col items-start justify-start rounded-lg bg-white p-4 dark:bg-gray-800">
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">
        Outstanding Invoices
      </h4>
      <div className="mt-2 flex items-center">
        <span className="text-4xl font-bold text-gray-900 dark:text-white">
          475
        </span>
        <div className="ml-2 flex items-center rounded-full bg-green-100 px-2 py-0.5 text-sm font-medium text-green-700 dark:bg-green-900 dark:text-green-400">
          <HiArrowUp className="mr-1 h-4 w-4" />
          1.4%
        </div>
      </div>
      <span className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        vs last day
      </span>
    </div>
  );
};

export default Info;
