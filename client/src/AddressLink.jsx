import React from "react";

export const AddressLink = ({ children, className = null }) => {
  if (!className) {
    className = "block my-5  ";
  }
  className += "flex gap-1 font-semibold underline ";

  return (
    <div>
      <a className={className} href={"https://maps.google.com/?q=" + children}>
        <div className="flex gap-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          {children}
        </div>
      </a>
    </div>
  );
};
