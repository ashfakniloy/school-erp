import { format } from "date-fns";

export const FeesColumn = [
  {
    Header: "Name",
    accessor: "fee_name",
  },
  {
    Header: "Fee Type",
    accessor: "fee_type",
  },
  {
    Header: "Amount",
    accessor: "fee_amount",
  },
  {
    Header: "Class",
    accessor: "class",
  },
  {
    Header: "Section",
    accessor: "section",
  },
  {
    Header: "Starts From",
    accessor: "starts_from",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Finishes At",
    accessor: "finishes_at",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];
