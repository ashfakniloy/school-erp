import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Table from "../../../components/Admin/Table";
import { ParentsColumn } from "../../../components/Admin/Table/columns/parents";
import useGetData from "../../../components/Hooks/useGetData";
import Layout from "../../../components/Admin/Layout";
import { API_URL, token, schoolId } from "../../../config";
import Loader from "../../../components/Layout/Loader";

function AllParentsPage() {
  const [parentsData, setParentsData] = useState([]);
  // const { token, userId } = useSelector((state) => state.login);

  const { fetchedData, isLoading, isError } = useGetData("parent/all");

  // useEffect(() => {
  //   const getData = async () => {
  //     const res = await fetch(`${API_URL}/parent/all/${schoolId}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await res.json();

  //     if (res.ok) {
  //       setParentsData(data.data);
  //       console.log(data.data);
  //     } else {
  //       console.log(data.data);
  //     }
  //   };
  //   getData();
  // }, []);

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Teachers</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Parents Data
          </h1>

          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={ParentsColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllParentsPage;
