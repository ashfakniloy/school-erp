// import useGetData from "../../components/Hooks/useGetData";
import Layout from "../../components/Student/Layout";

function AttendancePage() {
  // const { fetchedData } = useGetData(`/student/attendance`);

  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          {/* {role} Dashboard */}
          Attendance Page
        </h1>
        <div className="mt-14 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            Attendance Data
          </h1>
          {/* <div className="mt-10 px-3 flex flex-col items-center">
            
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default AttendancePage;
