import Table from "../../../components/Admin/Table";
import { HostelsColumn } from "../../../components/Admin/Table/columns/hostels";
import Layout from "../../../components/Admin/Layout";
import useGetData from "../../../components/Hooks/useGetData";

function AllHostelRoomsPage() {
  const { fetchedData } = useGetData("hostel/all");

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Hostel</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            Hostel Room Lists
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={HostelsColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllHostelRoomsPage;
