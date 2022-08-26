import Layout from "../../components/Admin/Layout";
import { useSelector } from "react-redux";
// import Layout from "../../components/Layout";
import Cards from "../../components/Admin/Dashboard/Cards";
import LineChart from "../../components/Admin/Dashboard/Charts/LineChart";
import BarChart from "../../components/Admin/Dashboard/Charts/BarChart";
import DoughnutChart from "../../components/Admin/Dashboard/Charts/DoughnutChart";
import NoticeBoard from "../../components/Admin/NoticeBoard";
import useGetData from "../../components/Hooks/useGetData";
import { parseCookies } from "../../helpers";
import { useEffect } from "react";
import { API_URL } from "../../config";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Loader from "../../components/Layout/Loader";

function AdminPage() {
  // const { user_role } = useSelector((state) => state.auth);
  // const { role } = useSelector((state) => state.info);

  const { data } = useSession();
  const { role } = data ? data.user : "";

  // const user = role && role.split(" ").join("_");
  const { fetchedData, isLoading, isError } =
    useGetData(`data/super_admin/all`);

  const {
    total_students,
    total_teachers,
    total_parents,
    total_earnings,
    total_male,
    total_female,
    notice,
    // role,
  } = fetchedData ? fetchedData : "";

  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800 capitalize">
          {/* {role && role.split(" admin").join("")} Admin Dashboard */}
          {role} Dashboard
        </h1>

        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <Cards
            students={total_students}
            teachers={total_teachers}
            parents={total_parents}
            earnings={total_earnings}
          />

          <div className="col-span-2">
            <LineChart />
          </div>
          <BarChart />
          <DoughnutChart male={total_male} female={total_female} />
          <div className="col-span-2">
            <NoticeBoard notices={notice} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export async function getServerSideProps({ req }) {
//   const { token, id } = parseCookies(req);
//   const url = `${API_URL}/data/super_admin/all/${id}`;

//   const res = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await res.json();

//   // console.log("home", data);

//   if (res.ok) {
//     // setFetchedData(data.data);
//     console.log("all data", data.data);
//   } else {
//     console.log("error", data.data);
//   }

//   return {
//     props: {
//       data: data.data,
//     },
//   };
// }

// AdminPage.getInitialProps = ({ req }) => {
//   const { token } = parseCookies(req);
//   console.log("success", token);

//   return {
//     token,
//   };
// };

export default AdminPage;
