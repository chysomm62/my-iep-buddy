import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useSortBy,
} from "react-table";

import { FC, useMemo } from "react";
import { ColumnFilter } from "./columnFilter";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

interface TableProps {
  Data: any[];
  Columns: any[];
}

export const SimpleTable: FC<TableProps> = ({ Data, Columns }) => {
  const columns = useMemo(() => Columns, []);
  const data = useMemo(() => Data, []);

  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
  } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <div className="relative overflow-x-auto shadow-2 sm:rounded-lg bg-grey-3  font-book">
      <table
        {...getTableProps()}
        className="text-left w-full  font-book text-black-1 border border-grey-8"
      >
        <thead className="border-b border-grey-8">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className="bg-white">
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  scope="col"
                  className="px-3 py-5 border-r border-grey-7 last-of-type:border-r-0 font-book text-sm"
                >
                  {column.render("Header")}{" "}
                  <span className="inline-block">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <BsArrowDown />
                      ) : (
                        <BsArrowUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="bg-white border-b  border-grey-8"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-3 py-4 border-r border-grey-7 last-of-type:border-r-0 whitespace-nowrap text-sm font-light"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
