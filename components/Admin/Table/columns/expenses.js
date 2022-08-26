import { format } from "date-fns";

export const ExpensesColumn = [
  {
    Header: "ID",
    accessor: "id_no",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Expense Type",
    accessor: "expense_type",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];
