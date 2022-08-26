import { format } from "date-fns";

export const ExamsColumn = [
  {
    Header: "Exam Name",
    accessor: "exam_name",
  },
  {
    Header: "Subject",
    accessor: "subject_type",
  },
  {
    Header: "Class",
    accessor: "select_class",
  },
  {
    Header: "Section",
    accessor: "select_section",
  },
  {
    Header: "Time",
    accessor: "select_time",
  },
  {
    Header: "Date",
    accessor: "select_date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];
