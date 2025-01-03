"use client";
import Info from "../info/Info";

const StaticsInfo = () => {
  return (
    <div className="flex border-b">
      {[1, 2, 3, 4, 5].map((item, index) => (
        <Info />
      ))}
    </div>
  );
};

export default StaticsInfo;
