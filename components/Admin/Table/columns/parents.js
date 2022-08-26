import { format } from "date-fns";

export const ParentsColumn = [
  {
    Header: "ID",
    accessor: "id_no",
  },
  {
    Header: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Occupation",
    accessor: "occupation",
  },

  {
    Header: "Address",
    accessor: "address",
  },
  {
    Header: "Date of Birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Email",
    accessor: "email",
  },
];
