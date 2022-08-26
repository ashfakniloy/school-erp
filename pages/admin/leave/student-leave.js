import Layout from "../../../components/Admin/Layout";
import LeaveTabs from "../../../components/Admin/LeaveTabs";

function StudentLeavePage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Student Leave</h1>
        <div className="mt-14 bg-white p-10 shadow-md">
          <h1 className="text-xl font-semibold text-slate-800">Leave</h1>
          <LeaveTabs />
        </div>
      </div>
    </Layout>
  );
}

export default StudentLeavePage;
