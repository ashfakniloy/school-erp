import { format } from "date-fns";

export const ClassesColumn = [
  {
    Header: "ID",
    accessor: "id_no",
  },
  {
    Header: "Teacher Name",
    accessor: "teacher_name",
  },
  // {
  //   Header: "Gender",
  //   accessor: "gender",
  // },
  {
    Header: "Class",
    accessor: "class",
  },
  {
    Header: "Section",
    accessor: "section",
  },
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Time",
    accessor: "time",
  },
  // {
  //   Header: "Phone",
  //   accessor: "phone",
  // },
  {
    Header: "Email",
    accessor: "email",
  },
];
