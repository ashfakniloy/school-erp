import { format } from "date-fns";

export const LibraryColumn = [
  {
    Header: "ID",
    accessor: "book_id",
  },
  {
    Header: "Book Name",
    accessor: "book_name",
  },
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Writer Name",
    accessor: "writer_name",
  },

  {
    Header: "Class",
    accessor: "class",
  },
  {
    Header: "Publish Date",
    accessor: "publish_date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "Upload Date",
    accessor: "upload_date",
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
];
