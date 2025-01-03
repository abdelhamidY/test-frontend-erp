"use client";
import { Checkbox, Pagination, Table } from "flowbite-react";
import React, { useState } from "react";
import NoContentContainer from "../NoContentContainer/NoContentContainer";
import NotFoundContent from "../NotFoundContent/NotFoundContent";

interface Column<T> {
  field: keyof T | string;
  headerName: string;
  render?: (row: T) => React.ReactNode;
}

interface CustomTableProps<T> {
  columns: Column<T>[];
  data: T[];
  rowsPerPageOptions?: number[];
  defaultRowsPerPage?: number;
  expandable?: boolean;
  renderSubtable?: (row: T) => React.ReactNode;
}

const CustomTable = <T,>({
  columns,
  data,
  rowsPerPageOptions = [5, 10, 25],
  defaultRowsPerPage = 5,
  expandable = false,
  renderSubtable,
}: CustomTableProps<T>) => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const toggleExpand = (index: number) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  const handlePageChange = (selectedPage: number) => {
    setPage(selectedPage);
  };

  const paginatedData = data.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage,
  );

  return (
    <div className="overflow-x-auto">
      <NoContentContainer items={data} noContentComponent={<NotFoundContent />}>
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell className="p-4">
              <Checkbox />
            </Table.HeadCell>
            {columns.map((column) => (
              <Table.HeadCell
                key={column.field.toString()}
                className="text-[#6B7280]"
              >
                {column.headerName.toLocaleUpperCase()}
              </Table.HeadCell>
            ))}
            {expandable && <Table.HeadCell />}
          </Table.Head>
          <Table.Body className="w-full">
            {paginatedData.map((row: T, index: number) => (
              <React.Fragment key={index}>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="p-4">
                    <Checkbox />
                  </Table.Cell>
                  {columns.map((column) => (
                    <Table.Cell
                      key={column.field.toString()}
                      className="whitespace-nowrap font-medium text-gray-900 dark:text-white"
                    >
                      {column.render
                        ? column.render(row)
                        : (row[column.field as keyof T] as React.ReactNode)}
                    </Table.Cell>
                  ))}
                  {expandable && (
                    <Table.Cell>
                      <button
                        className="text-cyan-600 hover:underline dark:text-cyan-500"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedRow === index ? "Collapse" : "Expand"}
                      </button>
                    </Table.Cell>
                  )}
                </Table.Row>
                {expandable && expandedRow === index && renderSubtable && (
                  <Table.Row className="bg-gray-100 dark:bg-gray-900">
                    <Table.Cell colSpan={columns.length + 2}>
                      {renderSubtable(row)}
                    </Table.Cell>
                  </Table.Row>
                )}
              </React.Fragment>
            ))}
          </Table.Body>
        </Table>
      </NoContentContainer>

      <div className="flex items-center justify-between py-3">
        <div></div>
        <Pagination
          currentPage={page}
          // totalPages={Math.ceil(data.length / rowsPerPage)}
          totalPages={1000}
          onPageChange={handlePageChange}
          showIcons
          nextLabel={``}
          previousLabel=""
        />
      </div>
    </div>
  );
};

export default React.memo(CustomTable);
