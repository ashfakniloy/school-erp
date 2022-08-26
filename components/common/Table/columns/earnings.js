import { format } from "date-fns";

export const EarningsColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];
