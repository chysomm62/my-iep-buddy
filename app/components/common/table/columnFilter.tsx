import { FC } from "react";

interface FilterProps {
  column: any;
}

export const ColumnFilter: FC<FilterProps> = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      Search:{" "}
      <input
        className=" font-book"
        value={filterValue || ""}
        onChange={(e) => setFilter(e.target.value)}
      />
    </span>
  );
};
