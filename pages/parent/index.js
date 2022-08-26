import Layout from "../../components/Parent/Layout";
import Cards from "../../components/Admin/Dashboard/Cards";
import LineChart from "../../components/Admin/Dashboard/Charts/LineChart";
import BarChart from "../../components/Admin/Dashboard/Charts/BarChart";
import DoughnutChart from "../../components/Admin/Dashboard/Charts/DoughnutChart";
import NoticeBoard from "../../components/Admin/NoticeBoard";
import useGetData from "../../components/Hooks/useGetData";
import { useSelector } from "react-redux";

function ParentPage() {
  const { user_role } = useSelector((state) => state.auth);
  const { role } = useSelector((state) => state.info);

  // const user = user_role && user_role.split(" ").join("_");
  // const { fetchedData } = useGetData(`data/${user}/all`);

  // const {
  //   total_students,
  //   total_teachers,
  //   total_parents,
  //   total_earnings,
  //   // total_male,
  //   // total_female,
  //   // notice,
  // } = fetchedData;

  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          {/* {user_role} Dashboard */}
          Parent Dashboard
        </h1>
        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* <Cards
            students={total_students}
            teachers={total_teachers}
            parents={total_parents}
            earnings={total_earnings}
          /> */}
          {/* <div className="col-span-2">
            <LineChart />
          </div>
          <BarChart />
          <DoughnutChart male={total_male} female={total_female} />
          <div className="col-span-2">
            <NoticeBoard notices={notice} />
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default ParentPage;
