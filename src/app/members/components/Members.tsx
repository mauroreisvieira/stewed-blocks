"use client";

import React from "react";
// UI Components
import {
  ColumnsDef,
  Tag,
  TagProps,
  Grid,
  Select,
  Separator,
  DataTable,
  Table,
  Box,
  Text,
} from "@stewed/react";
// Hooks
import { useSelect } from "@stewed/hooks";
// Icons
import { MdOutlineArrowUpward, MdOutlineArrowDownward } from "react-icons/md";

type Status = "pending" | "processing" | "success" | "failed";

interface Payment {
  id: string;
  amount: {
    value: number;
    currency: string;
  };
  status: Status;
  email: string;
}

const data: Payment[] = [
  {
    id: "1",
    amount: {
      value: 1000,
      currency: "€",
    },
    status: "pending",
    email: "olivia.patel@example.com",
  },
  {
    id: "2",
    amount: {
      value: 2100,
      currency: "€",
    },
    status: "success",
    email: "sophia.chang@example.com",
  },
  {
    id: "3",
    amount: {
      value: 3000,
      currency: "€",
    },
    status: "failed",
    email: "noah.andersen@example.com",
  },
  {
    id: "4",
    amount: {
      value: 2000,
      currency: "€",
    },
    status: "processing",
    email: "benjamin.martinez@example.com",
  },
  {
    id: "5",
    amount: {
      value: 1500,
      currency: "€",
    },
    status: "success",
    email: "liam.connor@example.com",
  },
];

export function Members(): React.ReactElement {
  const columns: ColumnsDef<Payment>[] = [
    {
      accessorKey: "id",
      bodyCell: ({ id }) => id,
      headCell: () => "ID",
    },
    {
      accessorKey: "email",
      bodyCell: ({ email }) => email,
      headCell: () => "Email",
    },
    {
      accessorKey: "status",
      bodyCell: ({ status }) => {
        const skins = {
          failed: "critical",
          processing: "warning",
          success: "success",
          pending: "neutral",
        };

        return (
          <Tag skin={skins[status] as TagProps<"span">["skin"]} appearance="soft" size="sm">
            {status}
          </Tag>
        );
      },
      headCell: () => "Status",
    },
    {
      accessorKey: "amount",
      bodyCell: ({ amount }) => `${amount.value}${amount.currency}`,
      headCell: () => "Amount",
    },
  ];

  // Example data
  const items: (Status | "all")[] = ["all", "processing", "pending", "success", "failed"];
  // Using the useSelect hook to manage selection
  const { index, item: selectedOption, setIndex } = useSelect<Status | "all">(items);

  // Event handler to handle selection change
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newIndex = Number(event.target.value);
    setIndex(newIndex);
  };

  return (
    <Box direction="column">
      <Box direction="column" grow>
        <Text as="h4" weight="normal">
          Members
        </Text>
        <Separator space={{ block: "2xl" }} />

        <Grid cols={3}>
          <Select value={index} onChange={handleSelectChange}>
            {items.map((item, idx) => (
              <Select.Option key={idx} value={idx}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Grid>
        <Separator space={{ block: "lg" }} />
        <DataTable<Payment>
          data={data}
          columns={columns}
          sortableColumns={["amount"]}
          defaultColumnDirection="ASC"
          defaultColumnSorted="amount"
          onFilter={({ status }) => {
            return selectedOption && selectedOption !== "all"
              ? selectedOption.includes(status)
              : true;
          }}
          onSort={({ column, direction, items }) => {
            if (column === "amount") {
              return [...items].sort((a, b) => {
                return direction === "ASC"
                  ? a.amount.value - b.amount.value
                  : b.amount.value - a.amount.value;
              });
            }
            return null;
          }}>
          {({ headCells, bodyRows, footCells }) => (
            <Table appearance={["border", "border-columns", "striped", "border-rows"]}>
              <Table.Head>
                <Table.Row>
                  {headCells.map(
                    ({ columnKey, cellNode, isSortable, sortedColumn, sortDirection, onSort }) => (
                      <Table.Cell
                        as="th"
                        key={`head-${columnKey}`}
                        onClick={isSortable ? onSort : undefined}>
                        <Box gap="xs">
                          {cellNode}
                          {sortedColumn === columnKey && (
                            <span>
                              {sortDirection === "ASC" ? (
                                <MdOutlineArrowUpward size={12} />
                              ) : (
                                <MdOutlineArrowDownward size={12} />
                              )}
                            </span>
                          )}
                        </Box>
                      </Table.Cell>
                    ),
                  )}
                </Table.Row>
              </Table.Head>
              <Table.Body>
                {bodyRows.map(({ bodyCells, data: { id, status } }) => (
                  <Table.Row key={id} skin={status === "failed" ? "critical" : "default"}>
                    {bodyCells.map(({ columnKey, cellNode }) => (
                      <Table.Cell key={`${id}-${columnKey}`}>{cellNode}</Table.Cell>
                    ))}
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          )}
        </DataTable>
      </Box>
    </Box>
  );
}
