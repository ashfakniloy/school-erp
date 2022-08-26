// import useGetData from "../../components/Hooks/useGetData";
import Table from "../../components/common/Table";
import { FeesColumn } from "../../components/common/Table/columns/fees";
import useGetData from "../../components/Hooks/useGetData";
import Layout from "../../components/Student/Layout";

function FeesPage() {
  const { fetchedData } = useGetData("student/fee");

  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          {/* {role} Dashboard */}
          Fees Page
        </h1>
        <div className="mt-14 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            Fees Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={FeesColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default FeesPage;
