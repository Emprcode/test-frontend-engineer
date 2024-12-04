"use client";

import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { buttonVariants } from "./ui/Button";

interface FilterCheckboxProps {
  label?: string;
  isActive?: boolean;
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({ ...props }) => {
  return (
    <label
      className={cn(
        buttonVariants({}),
        "flex text-[10px] items-center md:text-xs capitalize py-1 px-2 md:px-4 md:py-2"
      )}
    >
      <input type="checkbox" className="hidden" />
      {props?.label}
    </label>
  );
};

export default FilterCheckbox;
