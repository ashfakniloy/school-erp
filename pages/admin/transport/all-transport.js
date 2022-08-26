import { useEffect, useState } from "react";
import Table from "../../../components/Admin/Table";
import { TransportsColumn } from "../../../components/Admin/Table/columns/transports";
import useGetData from "../../../components/Hooks/useGetData";
import Layout from "../../../components/Admin/Layout";
import { API_URL } from "../../../config";

function AllTransportPage() {
  const { fetchedData } = useGetData("transport/all");

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Transport</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Transport Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table
                columnsHeading={TransportsColumn}
                usersData={fetchedData}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllTransportPage;
