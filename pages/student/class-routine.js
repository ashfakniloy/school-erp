// import useGetData from "../../components/Hooks/useGetData";
// import useGetData from "../../components/Hooks/useGetData";
import Table from "../../components/common/Table";
import { ClassesColumn } from "../../components/common/Table/columns/classes";
import useGetData from "../../components/Hooks/useGetData";
import Layout from "../../components/Student/Layout";

function ClassRoutinePage() {
  const { fetchedData } = useGetData("student/class_routine");

  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          {/* {role} Dashboard */}
          Class Routine Page
        </h1>
        <div className="mt-14 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            Class Routine Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={ClassesColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClassRoutinePage;
