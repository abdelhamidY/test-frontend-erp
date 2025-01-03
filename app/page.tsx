"use client";
import Inventory from "@/components/home/Inventory/Inventory";
import Invoicies from "@/components/home/invoicies/invoicies";
import Reciepts from "@/components/home/Receipts/Receipts";
import StaticsInfo from "@/components/home/StaticsInfo/StaticsInfo";
import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <main className="has-app-max-width min-h-screen gap-2 dark:bg-gray-800">
      <StaticsInfo />
      <Invoicies />
      <Reciepts />
      <Inventory />
    </main>
  );
}
