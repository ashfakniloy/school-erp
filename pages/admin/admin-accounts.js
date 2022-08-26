import { useState, useEffect } from "react";
import Layout from "../../components/Admin/Layout";
// import Layout from "../../components/Layout";
import AdminForm from "../../components/Admin/Form/AdminForm";
import Users from "../../components/Admin/Account/Users";
import UserDetails from "../../components/Admin/Account/UserDetails";
import useGetData from "../../components/Hooks/useGetData";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { role } from "../../config";
import Loader from "../../components/Layout/Loader";
import FullPageLoader from "../../components/Layout/FullPageLoader";

// const users = [
//   {
//     id: 1,
//     name: "Steven Johnson",
//     role: "Super Admin",
//     gender: "Male",
//     image: "/images/user2.jpg",
//   },
//   {
//     id: 2,
//     name: "John Doe",
//     role: "Admin",
//     gender: "Male",
//     image: "/images/user2.jpg",
//   },
//   {
//     id: 3,
//     name: "Random User",
//     role: "User",
//     gender: "Female",
//     image: "/images/user2.jpg",
//   },
//   {
//     id: 4,
//     name: "Random User 2",
//     role: "User",
//     gender: "Female",
//     image: "/images/user2.jpg",
//   },
// ];

function AdminAccountsPage() {
  const { fetchedData } = useGetData("admin_user/all");
  const [userDetails, setUserDetails] = useState("");
  // const [render, setRender] = useState(true);
  // const [userDetails, setUserDetails] = useState(fetchedData[0]);

  // const { user_role } = useSelector((state) => state.auth);
  // const { role } = useSelector((state) => state.info);

  const router = useRouter();

  // useEffect(() => {
  //   if (user_role !== "super admin") {
  //     setRender(false);
  //     router.replace("/404");
  //   }
  // }, [user_role, router]);

  // useEffect(() => {
  //   console.log(fetchedData[0]);
  //   setUserDetails(fetchedData[0]);
  //   if (role !== "super admin") {
  //     router.replace("/404");
  //   }
  // }, [fetchedData, setUserDetails, role, router]);

  // const userRole = role ? role : "";

  useEffect(() => {
    // if (role !== "super admin") {
    //   router.replace("/404");
    // }
    fetchedData && console.log(fetchedData[0]);
    fetchedData && setUserDetails(fetchedData[0]);
  }, [router, fetchedData, setUserDetails]);

  // if (role !== "super admin") {
  //   router.replace("/404");
  //   return;
  // }

  // if (!render) {
  //   return <FullPageLoader />;
  // }

  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          Account Setting
        </h1>
        <div className="mt-8">
          <AdminForm />
        </div>

        {userDetails && (
          <div className="mt-8 flex gap-5">
            <Users
              users={fetchedData}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
            />

            <UserDetails userDetails={userDetails} />
          </div>
        )}
      </div>
    </Layout>
  );
}

export default AdminAccountsPage;
