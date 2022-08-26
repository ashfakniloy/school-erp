import { useEffect, useState } from "react";
import Table from "../../../components/Admin/Table";
import { SalariesColumn } from "../../../components/Admin/Table/columns/salaries";
import Layout from "../../../components/Admin/Layout";
import { API_URL } from "../../../config";
import useGetData from "../../../components/Hooks/useGetData";

function AllExpensesPage() {
  const { fetchedData } = useGetData("salary/all");

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Acccounting</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Salaries Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={SalariesColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllExpensesPage;
