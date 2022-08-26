import { useEffect, useState } from "react";
import Table from "../../../components/Admin/Table";
import { LibraryColumn } from "../../../components/Admin/Table/columns/library";
import useGetData from "../../../components/Hooks/useGetData";
import Layout from "../../../components/Admin/Layout";
import { API_URL } from "../../../config";

function AllBooksPage() {
  const [libraryData, setLibraryData] = useState([]);

  const { fetchedData } = useGetData("library/all");

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`${API_URL}/library/all`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const data = await res.json();

  //     setLibraryData(data.library);
  //   };
  //   getData();
  // }, []);

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Teachers</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Books Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={LibraryColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllBooksPage;
