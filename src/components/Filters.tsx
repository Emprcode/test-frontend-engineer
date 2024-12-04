"use client";

import { FC } from "react";
import FilterCheckbox from "./FilterCheckbox";
import SortByMenu from "./SortByMenu";

export interface FiltersProps {
  data: null | string[];
}

const Filters: FC<FiltersProps> = ({ ...props }) => {
  return (
    <div className="flex w-full justify-between flex-wrap gap-4 px-4 py-4 md:py-8">
      <div className="flex gap-4 flex-wrap items-center">
        {props?.data?.map((item: string, idx: number) => (
          <div key={idx}>
            <FilterCheckbox />
          </div>
        ))}
      </div>

      <div className="shrink-0">
        <SortByMenu />
      </div>
    </div>
  );
};

export default Filters;
