import SvgEmptyData from "@/icons/EmptyData";

const NotFoundContent = () => {
  return (
    <div className="flex w-full gap-8 flex-col items-center  justify-center  p-5 dark:bg-gray-900">
      <SvgEmptyData />
      <span className="text-[#767C85] text-sm font-medium">
        There are no records available for the current period.{" "}
      </span>
    </div>
  );
};
export default NotFoundContent;
