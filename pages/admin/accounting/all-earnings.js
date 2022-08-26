import { useEffect, useState } from "react";
import Table from "../../../components/Admin/Table";
import { EarningsColumn } from "../../../components/Admin/Table/columns/earnings";
import Layout from "../../../components/Admin/Layout";
import { API_URL } from "../../../config";
import useGetData from "../../../components/Hooks/useGetData";

function AllEarningsPage() {
  const { fetchedData } = useGetData("earning/all");

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Acccounting</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Earnings Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={EarningsColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllEarningsPage;
