"use client";

import React, { FC, useState } from "react";
import { useAsyncDebounce } from "react-table";
import { FiSearch } from "react-icons/fi";

interface FilterProps {
  filter: any;
  setFilter: any;
}

export const GlobalFilter: FC<FilterProps> = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter);

  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 500);
  return (
    <span className="max-w-[100%]">
      <div className="relative  font-book">
        <input
          className="w-full py-4 px-6 overflow-x-hidden rounded-lg shadow-2 my-3 pl-16"
          value={value || ""}
          placeholder="Search... "
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
          <FiSearch size="25px" className="text-grey-5" />
        </div>
      </div>
    </span>
  );
};
