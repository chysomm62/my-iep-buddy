"use client";
import "regenerator-runtime/runtime";
/* eslint-disable react/jsx-key */

import {
  useTable,
  useGlobalFilter,
  useFilters,
  usePagination,
  useSortBy,
} from "react-table";
// import { CSVLink } from "react-csv";
import { FC, useMemo } from "react";
import { GlobalFilter } from "./globalFilter";
import { ColumnFilter } from "./columnFilter";
import {
  BsArrowDown,
  BsArrowUp,
  BsChevronDoubleRight,
  BsChevronDoubleLeft,
  BsDownload,
} from "react-icons/bs";
import { AiOutlineEye, AiOutlinePlus } from "react-icons/ai";
import Card from "@public/images/Avatar.png";

interface TableProps {
  Data: any[];
  Columns: any[];
}

const Table: FC<TableProps> = ({ Data, Columns }) => {
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
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    pageOptions,
    prepareRow,
    setPageSize,
    state,
    setGlobalFilter,
  } = useTable(
    { columns, data, defaultColumn },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const CSVReport = {
    filename: "Aflysense.csv",
    header: columns,
    data: data,
  };

  const { globalFilter, pageIndex, pageSize } = state;
  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <div className="my-5 p-4 flex items-center justify-evenly shadow-2 sm:rounded-lg flex-wrap gap-3  font-book">
        {/* <CSVLink {...CSVReport}>
          <button>
            <BsDownload className="inline-block" /> Export
          </button>
        </CSVLink> */}
      </div>
      <div className="relative overflow-x-auto shadow-2 sm:rounded-lg   font-book">
        <table
          {...getTableProps()}
          className="w-full text-left font-book text-black-1 "
        >
          <thead className="text-base border-b border-grey-10 font-book">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="bg-white">
                {headerGroup.headers.map((column, i) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    scope="col"
                    className="px-3 py-5 border-r border-grey-10 last-of-type:border-r-0 font-book "
                  >
                    {/* <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div> */}
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
          <tbody {...getTableBodyProps()} className="font-light text-base">
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="bg-white border-b  border-grey-10"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-3 py-4 border-r border-grey-10 last-of-type:border-r-0 whitespace-nowrap"
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
      <div className=" font-book shadow-2 sm:rounded-lg bg-grey-white py-4 px-8 my-4 flex items-center justify-between flex-col md:flex-row max-w-6xl gap-3 md:gap-0">
        <div className="flex justify-between">
          {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            First &nbsp;
          </button> */}
          <button
            className="text-black-1 shadow-3 border border-grey-11 bg-white"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          {/* <span>
            &nbsp;&nbsp;&nbsp;
            <input
              className="w-8"
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </span> */}
          <button
            className="text-black-1 shadow-3 border border-grey-11 bg-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          {/* <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            &nbsp; Last
          </button> */}
        </div>
        {/* <div>
          <select
            className="p-3 bg-white"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Display per page &nbsp;&nbsp;{pageSize}
              </option>
            ))}
          </select>
        </div> */}
        <div>
          <span className="text-black-2">
            page {pageIndex + 1} of {pageOptions.length}{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default Table;
