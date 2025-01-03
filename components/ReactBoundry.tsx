import React from "react";

interface DefaultLoadingBoundaryProps {
  loadingText?: string; // Optional loading text
}

const DefaultLoadingBoundary: React.FC<DefaultLoadingBoundaryProps> = ({
  loadingText = "Loading...",
}) => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center">
        <svg
          className="h-10 w-10 animate-spin text-gray-600 dark:text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default DefaultLoadingBoundary;
