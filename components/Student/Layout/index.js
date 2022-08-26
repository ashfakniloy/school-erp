import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";
// import { navLinks } from "./NavLinks";
import Sidebar from "../../Layout/Sidebar";
import { student } from "../../Layout/Sidebar/navlinks/student";
import { getInfo } from "../../../redux/features/info/infoSlice";
import useGetData from "../../Hooks/useGetData";
// import { API_URL, institution_name, user_name, role } from "../../../config";
import NonSSRWrapper from "../../NonSSRWrapper";
import { useSession } from "next-auth/react";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  // const { user_role } = useSelector((state) => state.auth);
  // const { logo, photo, user_name, institution_name, role } = useSelector(
  //   (state) => state.info
  // );

  const { data } = useSession();
  const { institution_name, user_name, role } = data ? data.user : "";

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  // const user = user_role && user_role;

  // const { fetchedData } = useGetData(`student/personal/data`);

  // useEffect(() => {
  //   fetchedData && dispatch(getInfo(fetchedData));
  //   // if (user_role !== "student") {
  //   //   router.push("/");
  //   // }
  // }, [dispatch, fetchedData]);

  // const userRole = user_role && user_role;

  // useEffect(() => {
  //   if (userRole !== "student") {
  //     router.push("/");
  //   }
  // }, [userRole, router]);

  // if (!user_name) {
  //   return <Loader />;
  // }

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        navLinks={student}
        name="student"
      />

      <div className="flex-1 min-h-screen">
        <NonSSRWrapper>
          <Header
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            // logo={logo}
            // photo={photo}
            userName={user_name}
            institutionName={institution_name}
            role={role}
          />
        </NonSSRWrapper>

        {loading && <Loader />}

        {children}

        <ScrollTop />
      </div>
    </div>
  );
}

export default Layout;
