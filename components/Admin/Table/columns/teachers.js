import { format } from "date-fns";

export const TeachersColumn = [
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
    Header: "Class",
    accessor: "class",
  },
  {
    Header: "Section",
    accessor: "section",
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

// export const COLUMNS = [
//   {
//     Header: "Id",
//     accessor: "id",
//     disableFilters: true,
//   },
//   {
//     Header: "First Name",
//     accessor: "first_name",
//   },
//   {
//     Header: "Last Name",
//     accessor: "last_name",
//   },
// {
//   Header: "Date of Birth",
//   accessor: "date_of_birth",
//   Cell: ({ value }) => {
//     return format(new Date(value), "dd/MM/yyyy");
//   },
// },
//   {
//     Header: "Country",
//     accessor: "country",
//   },
//   {
//     Header: "Phone",
//     accessor: "phone",
//   },
// ];
