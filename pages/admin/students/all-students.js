import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../../../components/Admin/Table";
import { StudentsColumn } from "../../../components/Admin/Table/columns/students";
// import useGetData from "../../../components/Hooks/useGetData";
import Layout from "../../../components/Admin/Layout";
import { API_URL, token, schoolId } from "../../../config";
import useGetData from "../../../components/Hooks/useGetData";
import Loader from "../../../components/Layout/Loader";

function AllStudentsPage() {
  const [studentsData, setStudentsData] = useState([]);

  // const { fetchedData } = useGetData("student/all");

  const { fetchedData, isLoading, isError } = useGetData("student/all");

  // if (isLoading) return console.log("loading", isLoading);
  // if (isError) return console.log("error", fetchedData);

  return (
    <Layout>
      <div className="px-5 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Students</h1>
        <div className="mt-8">
          <div className="mt-14 bg-white py-10 shadow-md">
            <h1 className="px-10 text-xl font-semibold text-slate-800">
              All Students Data
            </h1>

            <div className="mt-10 px-3 flex flex-col items-center">
              {fetchedData && (
                <Table
                  columnsHeading={StudentsColumn}
                  usersData={fetchedData}
                />
              )}
              {/* <StudentsTable  /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllStudentsPage;
