import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { admin } from "../../Layout/Sidebar/navlinks/admin";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";

import useGetData from "../../Hooks/useGetData";
import { getInfo } from "../../../redux/features/info/infoSlice";
// import { API_URL, institution_name, user_name, role } from "../../../config";
import { token } from "../../../config";
import { useSession } from "next-auth/react";

// Layout.getInitialProps = async () => {
//   const { token, id } = useSelector((state) => state.auth);
//   const url = `${API_URL}/data/admin/all/${id}`;

//   const res = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await res.json();

//   return { data };
// };

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { data, status } = useSession({
    // required: true,
    // onUnauthenticated() {
    //   router.push("/");
    // },
  });

  const { institution_name, user_name, role } = data ? data.user : "";

  // const { role } = data ? data.user : "";
  // const { user_role } = useSelector((state) => state.auth);
  // const { logo, photo } = useSelector((state) => state.info);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });
  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  const userRoute = role && role.split(" ").join("_");
  // const userRole = user_role && user_role.split("super ").join("");

  const { fetchedData } = useGetData(`data/${userRoute}/all`);

  const { photo, logo } = fetchedData;

  //for authorization
  // useEffect(() => {
  //   fetchedData && dispatch(getInfo(fetchedData));
  //   // if (status === "loading") {
  //   //   router.push("/");
  //   // }
  // }, [dispatch, fetchedData]);

  const navLinks = () => {
    if (role !== "super admin") {
      return admin.filter((item) => item.name !== "admin accounts");
    } else {
      return admin;
    }
  };

  // if (status === "loading") {
  //   return <Loader />;
  // }

  return (
    <>
      <div className="flex">
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          navLinks={navLinks()}
          name={role}
        />

        <div className="flex-1 min-h-screen">
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            logo={logo}
            photo={photo}
            user_name={user_name}
            institution_name={institution_name}
            role={role}
          />

          {loading && <Loader />}

          {children}

          <ScrollTop />
        </div>
      </div>
    </>
  );

  // if (status === "authenticated") {
  //   return (
  //     <>
  //       <div className="flex">
  //         <Sidebar
  //           showMenu={showMenu}
  //           setShowMenu={setShowMenu}
  //           navLinks={navLinks()}
  //           name={role}
  //         />

  //         <div className="flex-1 min-h-screen">
  //           <Header
  //             showMenu={showMenu}
  //             setShowMenu={setShowMenu}
  //             logo={logo}
  //             userName={user_name}
  //             institutionName={institution_name}
  //             role={role}
  //           />

  //           {loading && <Loader />}

  //           {children}

  //           <ScrollTop />
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
}

export default Layout;
